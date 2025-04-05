<script lang="ts">
	import Navbar from '../../components/Navbar.svelte';
	let { children } = $props();
</script>

<div class="h-screen max-w-full bg-gray-950">
	<Navbar />
	{@render children()}
</div>
