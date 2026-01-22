<script>
	import { fade, slide } from 'svelte/transition';
	export let data;
</script>

<section
	in:fade={{ duration: 800 }}
	out:slide
	class="min-h-screen bg-linear-to-b from-slate-950 via-slate-900 to-slate-950 px-4 py-12 font-mono"
>
	<div class="mx-auto max-w-4xl">
		<!-- Navigation -->
		<div class="mb-8 flex flex-wrap gap-4 text-sm">
			<a
				href="/about"
				class="rounded border border-slate-600 bg-slate-800/50 px-3 py-2 text-slate-300 transition hover:border-green-500 hover:text-green-400"
			>
				← About
			</a>
			<a
				href="/projects"
				class="rounded border border-slate-600 bg-slate-800/50 px-3 py-2 text-slate-300 transition hover:border-green-500 hover:text-green-400"
			>
				Projects
			</a>
			<a
				href="/contact"
				class="rounded border border-slate-600 bg-slate-800/50 px-3 py-2 text-slate-300 transition hover:border-green-500 hover:text-green-400"
			>
				Contact →
			</a>
		</div>

		<!-- Terminal Header -->
		<div
			class="mb-8 rounded-t-lg border border-green-500 bg-slate-800 px-6 py-4 shadow-2xl shadow-green-500/20"
		>
			<div class="flex items-center gap-3">
				<div class="h-3 w-3 rounded-full bg-red-500"></div>
				<div class="h-3 w-3 rounded-full bg-yellow-500"></div>
				<div class="h-3 w-3 rounded-full bg-green-500"></div>
				<span class="ml-4 text-sm text-green-400">portfolio@dev ~ $ ls -la blog/</span>
			</div>
		</div>

		<!-- Terminal Content -->
		<div
			class="border-x border-b border-green-500 bg-slate-950 px-6 py-8 shadow-2xl shadow-green-500/20"
		>
			{#if data.posts && data.posts.length > 0}
				<p class="mb-6 text-sm text-green-400">
					$ Found {data.posts.length} post{data.posts.length !== 1 ? 's' : ''}
				</p>

				<div class="space-y-6">
					{#each data.posts as post, index (post.slug)}
						<div
							in:fade={{ delay: index * 100 }}
							class="rounded border border-green-500/30 bg-slate-900/50 p-4 transition hover:border-green-500/60 hover:bg-slate-900/70"
						>
							<div class="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
								<div class="flex-1">
									{#if post.cover}
										<img
											src={post.cover}
											alt={post.title}
											class="mb-3 max-w-xs rounded border border-green-500/20"
										/>
									{/if}

									<h3 class="text-base font-semibold text-green-400">▶ {post.title}</h3>
									<p class="mt-2 text-xs text-slate-400">{post.date}</p>
									<p class="mt-2 text-sm text-slate-300">{post.description}</p>
								</div>

								<a
									href={`${post.slug}`}
									class="self-start rounded border border-green-500 bg-green-500/10 px-3 py-1 text-xs text-green-400 transition hover:bg-green-500/20"
								>
									read →
								</a>
							</div>
						</div>
					{/each}
				</div>

				<!-- Footer -->
				<div class="mt-8 border-t border-green-500/20 pt-6 text-center text-sm text-slate-400">
					<p>Total posts: {data.posts.length}</p>
				</div>
			{:else}
				<p class="text-center text-slate-400">$ No posts found</p>
			{/if}
		</div>

		<!-- Glow effect -->
		<div
			class="pointer-events-none -mt-0.5 h-1 rounded-b-lg bg-linear-to-r from-transparent via-green-500 to-transparent opacity-30"
		></div>

		<!-- CTA Section -->
		<div class="mt-12 rounded border border-green-500/30 bg-slate-900/30 px-6 py-6 text-center">
			<p class="text-sm text-slate-400">
				<span class="text-green-400">$</span> Enjoyed reading? Share your thoughts!
			</p>
			<a
				href="/contact"
				class="mt-4 inline-block rounded border border-green-500 bg-green-500/10 px-6 py-2 text-sm text-green-400 transition hover:border-green-400 hover:bg-green-500/20"
			>
				Get in touch →
			</a>
		</div>
	</div>
</section>

<style>
	:global(body) {
		background: linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%);
		min-height: 100vh;
	}
</style>
