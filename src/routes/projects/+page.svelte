<script>
	import { fade, slide } from 'svelte/transition';

	let selectedCategory = 'all';
	const categories = ['all', 'web', 'mobile', 'tools'];

	const projects = [
		{
			id: 1,
			name: 'E-Commerce Platform',
			category: 'web',
			description: 'Full-stack e-commerce solution with real-time inventory',
			tech: ['Svelte', 'Node.js', 'PostgreSQL', 'Stripe'],
			link: '#'
		},
		{
			id: 2,
			name: 'Task Management App',
			category: 'web',
			description: 'Collaborative task manager with real-time updates',
			tech: ['SvelteKit', 'Firebase', 'Tailwind CSS'],
			link: '#'
		},
		{
			id: 3,
			name: 'Mobile Fitness Tracker',
			category: 'mobile',
			description: 'Cross-platform fitness tracking application',
			tech: ['React Native', 'Firebase', 'Redux'],
			link: '#'
		},
		{
			id: 4,
			name: 'CLI Tool Suite',
			category: 'tools',
			description: 'Powerful command-line tools for developers',
			tech: ['Node.js', 'TypeScript', 'Commander.js'],
			link: '#'
		},
		{
			id: 5,
			name: 'Portfolio Generator',
			category: 'tools',
			description: 'Automated portfolio site generator',
			tech: ['SvelteKit', 'Markdown', 'Vite'],
			link: '#'
		},
		{
			id: 6,
			name: 'Social Media Dashboard',
			category: 'web',
			description: 'Unified dashboard for managing multiple social accounts',
			tech: ['Svelte', 'Express', 'MongoDB', 'Social APIs'],
			link: '#'
		}
	];

	$: filteredProjects =
		selectedCategory === 'all' ? projects : projects.filter((p) => p.category === selectedCategory);
</script>

<section
	in:fade={{ duration: 800 }}
	out:slide
	class="min-h-screen bg-linear-to-b from-slate-950 via-slate-900 to-slate-950 px-4 py-12 font-mono"
>
	<div class="mx-auto max-w-5xl">
		<!-- Navigation -->
		<div class="mb-8 flex flex-wrap gap-4 text-sm">
			<a
				href="/"
				class="rounded border border-slate-600 bg-slate-800/50 px-3 py-2 text-slate-300 transition hover:border-green-500 hover:text-green-400"
			>
				Home
			</a>
			<a
				href="/about"
				class="rounded border border-slate-600 bg-slate-800/50 px-3 py-2 text-slate-300 transition hover:border-green-500 hover:text-green-400"
			>
				← About
			</a>
			<a
				href="/blog"
				class="rounded border border-slate-600 bg-slate-800/50 px-3 py-2 text-slate-300 transition hover:border-green-500 hover:text-green-400"
			>
				Blog
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
				<span class="ml-4 text-sm text-green-400">portfolio@dev ~ $ ls -la projects/</span>
			</div>
		</div>

		<!-- Terminal Content -->
		<div
			class="border-x border-b border-green-500 bg-slate-950 px-6 py-8 shadow-2xl shadow-green-500/20"
		>
			<!-- Category Filter -->
			<div class="mb-6 flex flex-wrap gap-2">
				<span class="text-green-400">$ filter:</span>
				{#each categories as category (category)}
					<button
						on:click={() => (selectedCategory = category)}
						class={`rounded border px-3 py-1 text-sm transition ${
							selectedCategory === category
								? 'border-green-500 bg-green-500/20 text-green-400'
								: 'border-slate-600 bg-slate-800/50 text-slate-400 hover:border-green-500 hover:text-green-400'
						}`}
					>
						{category}
					</button>
				{/each}
			</div>

			<!-- Projects List -->
			<div class="space-y-6">
				{#each filteredProjects as project (project.id)}
					<div
						in:fade={{ duration: 300 }}
						class="border-l-2 border-green-500/30 bg-slate-900/30 px-4 py-4 transition hover:border-green-500 hover:bg-slate-900/50"
					>
						<div class="flex flex-col justify-between gap-2 sm:flex-row sm:items-start">
							<div class="flex-1">
								<h3 class="text-lg font-semibold text-green-400">
									<a href={project.link} class="hover:text-cyan-400">
										→ {project.name}
									</a>
								</h3>
								<p class="mt-1 text-sm text-slate-400">{project.description}</p>
								<div class="mt-3 flex flex-wrap gap-2">
									{#each project.tech as tech (tech)}
										<span class="rounded bg-slate-800 px-2 py-1 text-xs text-cyan-400">
											{tech}
										</span>
									{/each}
								</div>
							</div>
							<div class="text-right">
								<span class="inline-block rounded bg-slate-800 px-3 py-1 text-xs text-slate-500">
									{project.category}
								</span>
							</div>
						</div>
					</div>
				{/each}
			</div>

			<!-- No Results -->
			{#if filteredProjects.length === 0}
				<div class="py-8 text-center text-slate-500">
					<p>$ No projects found in this category</p>
				</div>
			{/if}

			<!-- Stats -->
			<div class="mt-8 border-t border-green-500/20 pt-6 text-sm text-slate-400">
				<p>$ total_projects: {projects.length}</p>
				<p>$ showing: {filteredProjects.length}</p>
			</div>
		</div>

		<!-- Glow effect -->
		<div
			class="pointer-events-none -mt-0.5 h-1 rounded-b-lg bg-linear-to-r from-transparent via-green-500 to-transparent opacity-30"
		></div>

		<!-- CTA Section -->
		<div class="mt-12 rounded border border-green-500/30 bg-slate-900/30 px-6 py-6 text-center">
			<p class="text-sm text-slate-400">
				<span class="text-green-400">$</span> Interested in collaborating?
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
