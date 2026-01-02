<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>

<div
	class="relative min-h-screen bg-slate-950 text-slate-200 antialiased selection:bg-indigo-500/30"
>
	<div
		class="pointer-events-none fixed inset-0 z-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"
	></div>

	<div class="relative z-10 flex min-h-screen flex-col">
		{@render children()}
	</div>
</div>

<style>
	:global(html) {
		color-scheme: dark;
		scroll-behavior: smooth;
	}
	:global(body) {
		margin: 0;
		font-family: 'Inter', system-ui, sans-serif;
	}
</style>
