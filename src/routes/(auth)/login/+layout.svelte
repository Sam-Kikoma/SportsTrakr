<script lang="ts">
	let { children } = $props();
</script>

<div class="h-screen max-w-full bg-gray-950">
	<h1 class="text-white">This is a test</h1>
	{@render children()}
</div>
