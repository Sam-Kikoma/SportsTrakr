<script lang="ts">
	const { message, type } = $props();
	let visible = $state(true);
	const dismiss = () => (visible = false);
</script>

{#if message && visible}
	<div
		class={`relative mb-6 w-full max-w-md rounded-xl px-5 py-4 text-sm shadow-md backdrop-blur-sm
      ${type === 'error' ? 'border-red-400 bg-red-500/10 text-red-300' : ''}
      ${type === 'info' ? 'border-green-400 bg-green-500/10 text-green-300' : ''}
    `}
	>
		<button
			onclick={dismiss}
			class="absolute top-3 right-3 text-gray-400 hover:text-gray-300 focus:outline-none"
		>
			&times;
		</button>

		<span class={`block font-semibold ${type === 'error' ? 'text-red-400' : 'text-green-400'}`}>
			{type === 'error' ? 'Error' : 'Info'}
		</span>
		<p class="mt-1">{message}</p>
	</div>
{/if}
