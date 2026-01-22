import type { PageServerLoad } from './$types';
import type { SvelteComponent } from 'svelte';

interface PostModule {
	default: typeof SvelteComponent;
	metadata: {
		title: string;
		date: string;
		description: string;
		cover?: string;
	};
}

export const load: PageServerLoad = async ({ params }) => {
	const posts = import.meta.glob<PostModule>('../posts/*.md', {
		eager: true
	});

	const match = Object.entries(posts).find(([path]) => path.endsWith(`/${params.slug}.md`));

	if (!match) {
		return { status: 404 };
	}

	const [, post] = match as [string, PostModule];

	return {
		component: post.default,
		meta: post.metadata || {}
	};
};
