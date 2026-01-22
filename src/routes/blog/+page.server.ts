import type { PageServerLoad } from './$types';

interface PostModule {
	default: unknown;
	metadata: {
		title: string;
		date: string;
		description: string;
		cover?: string;
	};
}

export const load: PageServerLoad = () => {
	const modules = import.meta.glob<PostModule>('./posts/*.md', { eager: true });

	const posts = Object.entries(modules).map(([path, mod]) => {
		const slug = path.split('/').pop()?.replace('.md', '') || '';
		return { slug, ...mod.metadata };
	});

	posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
	return { posts };
};
