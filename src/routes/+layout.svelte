<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>

<div class="h-screen max-w-full bg-gray-950">
	{@render children()}

<script>
	export let data;
</script>

<div class="layout-container">
	<slot />
</div>

<style>
	:global(body) {
		margin: 0;
		font-family: 'Inter', 'Segoe UI', Arial, sans-serif;
		background: #f6f6f7;
		color: #18181b;
		min-height: 100vh;
		letter-spacing: 0.01em;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}

	.layout-container {
		max-width: 900px;
		margin: 0 auto;
		padding: 32px 16px 48px 16px;
		background: #fff;
		border-radius: 18px;
		box-shadow: 0 2px 16px 0 rgba(30, 41, 59, 0.06);
		min-height: 90vh;
		display: flex;
		flex-direction: column;
		gap: 32px;
		transition: box-shadow 0.2s;
	}

	@media (max-width: 600px) {
		.layout-container {
			padding: 16px 4px 24px 4px;
			border-radius: 0;
			min-height: 100vh;
			box-shadow: none;
		}
	}
</style>
