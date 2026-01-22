<script lang="ts">
	import { fade, slide } from 'svelte/transition';

	let formData = {
		name: '',
		email: '',
		subject: '',
		message: ''
	};

	let submitted = false;
	let isSubmitting = false;

	function handleSubmit(e: Event) {
		e.preventDefault();
		isSubmitting = true;

		// Simulate form submission
		setTimeout(() => {
			submitted = true;
			isSubmitting = false;
			setTimeout(() => {
				submitted = false;
				formData = { name: '', email: '', subject: '', message: '' };
			}, 3000);
		}, 800);
	}
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
				href="/projects"
				class="rounded border border-slate-600 bg-slate-800/50 px-3 py-2 text-slate-300 transition hover:border-green-500 hover:text-green-400"
			>
				Projects
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
				<span class="ml-4 text-sm text-green-400">portfolio@dev ~ $ contact --me</span>
			</div>
		</div>

		<!-- Terminal Content -->
		<div
			class="border-x border-b border-green-500 bg-slate-950 px-6 py-8 shadow-2xl shadow-green-500/20"
		>
			{#if submitted}
				<div in:fade class="space-y-2 text-green-400">
					<p>$ send_message</p>
					<p class="text-cyan-400">→ Message sent successfully! 🚀</p>
					<p class="text-cyan-400">→ I'll get back to you soon.</p>
				</div>
			{:else}
				<form on:submit={handleSubmit} class="space-y-4">
					<div>
						<label for="name" class="block text-sm text-green-400">$ name:</label>
						<input
							id="name"
							type="text"
							bind:value={formData.name}
							required
							class="mt-2 w-full border border-green-500/30 bg-slate-900 px-3 py-2 font-mono text-sm text-green-400 placeholder-slate-600 transition outline-none focus:border-green-500 focus:shadow-lg focus:shadow-green-500/20"
							placeholder="Your name"
						/>
					</div>

					<div>
						<label for="email" class="block text-sm text-green-400">$ email:</label>
						<input
							id="email"
							type="email"
							bind:value={formData.email}
							required
							class="mt-2 w-full border border-green-500/30 bg-slate-900 px-3 py-2 font-mono text-sm text-green-400 placeholder-slate-600 transition outline-none focus:border-green-500 focus:shadow-lg focus:shadow-green-500/20"
							placeholder="your.email@example.com"
						/>
					</div>

					<div>
						<label for="subject" class="block text-sm text-green-400">$ subject:</label>
						<input
							id="subject"
							type="text"
							bind:value={formData.subject}
							required
							class="mt-2 w-full border border-green-500/30 bg-slate-900 px-3 py-2 font-mono text-sm text-green-400 placeholder-slate-600 transition outline-none focus:border-green-500 focus:shadow-lg focus:shadow-green-500/20"
							placeholder="Message subject"
						/>
					</div>

					<div>
						<label for="message" class="block text-sm text-green-400">$ message:</label>
						<textarea
							id="message"
							bind:value={formData.message}
							required
							rows={5}
							class="mt-2 w-full border border-green-500/30 bg-slate-900 px-3 py-2 font-mono text-sm text-green-400 placeholder-slate-600 transition outline-none focus:border-green-500 focus:shadow-lg focus:shadow-green-500/20"
							placeholder="Your message here..."
						></textarea>
					</div>

					<div class="flex gap-4">
						<button
							type="submit"
							disabled={isSubmitting}
							class="flex-1 border border-green-500 bg-green-500/10 px-4 py-2 font-mono text-sm text-green-400 transition hover:border-green-400 hover:bg-green-500/20 disabled:cursor-not-allowed disabled:opacity-50"
						>
							{isSubmitting ? '$ sending...' : '$ send'}
						</button>
						<button
							type="reset"
							class="border border-slate-600 bg-slate-800/50 px-4 py-2 font-mono text-sm text-slate-400 transition hover:border-slate-500 hover:text-slate-300"
						>
							clear
						</button>
					</div>
				</form>

				<div class="mt-6 space-y-2 border-t border-green-500/20 pt-6 text-sm text-slate-400">
					<p>$ contact_info</p>
					<p class="text-cyan-400">📧 Email: khantlinthein@outlook.com</p>
					<p class="text-cyan-400">🐙 GitHub: github.com/khantlinthein-devmm</p>
				</div>
			{/if}
		</div>

		<!-- Glow effect -->
		<div
			class="pointer-events-none -mt-0.5 h-1 rounded-b-lg bg-linear-to-r from-transparent via-green-500 to-transparent opacity-30"
		></div>
	</div>
</section>

<style>
	:global(body) {
		background: linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%);
		min-height: 100vh;
	}
</style>
