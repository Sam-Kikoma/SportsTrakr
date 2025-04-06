<script lang="ts">
	export let message: string;
	let visible = true;
	const dismiss = () => (visible = false);
</script>

{#if message && visible}
	<div
		class="relative mb-6 w-full max-w-md rounded-xl border border-red-400 bg-red-500/10 px-5 py-4 text-sm text-red-300 shadow-md backdrop-blur-sm"
	>
		<button
			on:click={dismiss}
			class="absolute top-3 right-3 text-red-400 hover:text-red-300 focus:outline-none"
			aria-label="Dismiss error"
		>
			&times;
		</button>

		<span class="block font-semibold text-red-400">Error</span>
		<p class="mt-1 text-red-300">{message}</p>
	</div>
{/if}
