<script>
	import { fade, slide } from 'svelte/transition';
	import { onMount } from 'svelte';

	let displayedText = '';
	let isTyping = false;
	const fullText = `$ whoami
khantlinthein

$ cat about.txt
Hi, I'm a passionate full-stack developer with a love for
creating elegant solutions to complex problems.

$ skills --list
├── Frontend: Svelte, React, Vue, TypeScript, Tailwind CSS
├── Backend: Node.js, Python, Express, C#
├── Databases: PostgreSQL, MongoDB, Firebase, MySQL
├── DevOps: Docker, Git, CI/CD, Netlify, AWS, GCP, Kubernetes, Terraform, Ansible
└── Design: UI/UX, Figma, Web Performance

$ cat interests.txt
🔧 Building scalable web applications
🎨 Creating beautiful user experiences
📚 Learning new technologies
🤝 Collaborating with creative teams
🚀 Open source contributions

$ connect --me
├── GitHub: github.com/khantlinthein-devmm
├── LinkedIn: linkedin.com/in/khant-linn-thein-5b3658351/
└── Email: khantlinthein@outlook.com

$ echo "Let's create something amazing together!"
Let's create something amazing together!
`;

	onMount(() => {
		isTyping = true;
		let index = 0;
		const interval = setInterval(() => {
			if (index < fullText.length) {
				displayedText += fullText[index];
				index++;
			} else {
				isTyping = false;
				clearInterval(interval);
			}
		}, 30);

		return () => clearInterval(interval);
	});
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
				href="/"
				class="rounded border border-slate-600 bg-slate-800/50 px-3 py-2 text-slate-300 transition hover:border-green-500 hover:text-green-400"
			>
				←
			</a>
			<a
				href="/blog"
				class="rounded border border-slate-600 bg-slate-800/50 px-3 py-2 text-slate-300 transition hover:border-green-500 hover:text-green-400"
			>
				Blog
			</a>
			<a
				href="/projects"
				class="rounded border border-slate-600 bg-slate-800/50 px-3 py-2 text-slate-300 transition hover:border-green-500 hover:text-green-400"
			>
				Projects →
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
				<span class="ml-4 text-sm text-green-400">portfolio@dev ~ $</span>
			</div>
		</div>

		<!-- Terminal Content -->
		<div
			class="border-x border-b border-green-500 bg-slate-950 px-6 py-8 text-green-400 shadow-2xl shadow-green-500/20"
		>
			<div class="space-y-1 text-sm leading-relaxed whitespace-pre-wrap sm:text-base">
				{displayedText}
				{#if isTyping}
					<span class="animate-pulse">▌</span>
				{/if}
			</div>
		</div>

		<!-- Glow effect -->
		<div
			class="pointer-events-none -mt-0.5 h-1 rounded-b-lg bg-linear-to-r from-transparent via-green-500 to-transparent opacity-30"
		></div>

		<!-- Terminal Footer Info -->
		<div class="mt-12 space-y-4 text-center text-sm text-green-400/60">
			<p>Type: portfolio.dev • Version: 1.0.0</p>
			<p>↓ Scroll to explore more ↓</p>
		</div>

		<!-- Quick Stats -->
		<div class="mt-12 grid gap-4 sm:grid-cols-3">
			{#each [{ label: 'Projects', value: '15+' }, { label: 'Experience', value: '5+ Years' }, { label: 'Happy Clients', value: '25+' }] as stat (stat.label)}
				<div
					in:fade={{ delay: 200 }}
					class="rounded border border-green-500/30 bg-slate-900/50 px-4 py-4 text-center backdrop-blur"
				>
					<div class="text-2xl font-bold text-green-400">{stat.value}</div>
					<div class="text-xs text-green-400/70">{stat.label}</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<style>
	:global(body) {
		background: linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%);
		min-height: 100vh;
	}
</style>
