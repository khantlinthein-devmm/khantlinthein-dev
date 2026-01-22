<script>
	import { goto } from '$app/navigation';
</script>

<nav>
	<button on:click={() => goto('/')}>Home</button>
	<button on:click={() => goto('/about')}>About</button>
	<button on:click={() => goto('/projects')}>Projects</button>
	<button on:click={() => goto('/contact')}>Contact</button>
</nav>
