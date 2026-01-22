<script>
	export let data;
	const Post = data.component;
</script>

<article style="max-width: 800px; margin: 0 auto;">
	<h1>{data.meta.title}</h1>
	<p style="opacity: 0.7;">{data.meta.date}</p>

	<svelte:component this={Post} />
</article>
