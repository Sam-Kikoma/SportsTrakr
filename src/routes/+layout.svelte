<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>

<div class="h-screen max-w-full bg-gray-950">
	{@render children()}
</div>
