<script lang="ts">
	let { message, type } = $props();
	let visible = $state(true);
	const dismiss = () => (visible = false);

	// Reset visibility if message changes
	$effect(() => {
		if (message) visible = true;
	});
</script>

{#if message && visible}
	<div
		class={`group relative overflow-hidden rounded-xl border px-5 py-4 shadow-2xl backdrop-blur-md transition-all duration-300
      ${type === 'error' ? 'border-red-500/50 bg-red-500/10 text-red-200' : 'border-emerald-500/50 bg-emerald-500/10 text-emerald-200'}
    `}
	>
		<div
			class={`absolute bottom-0 left-0 h-1 transition-all duration-[5000ms]
            ${type === 'error' ? 'bg-red-500/50' : 'bg-emerald-500/50'}`}
			style="width: 100%"
		></div>

		<div class="flex items-start gap-4">
			<div class="mt-0.5">
				{#if type === 'error'}
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-5 w-5 text-red-400"
						viewBox="0 0 20 20"
						fill="currentColor"
					>
						<path
							fill-rule="evenodd"
							d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
							clip-rule="evenodd"
						/>
					</svg>
				{:else}
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-5 w-5 text-emerald-400"
						viewBox="0 0 20 20"
						fill="currentColor"
					>
						<path
							fill-rule="evenodd"
							d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
							clip-rule="evenodd"
						/>
					</svg>
				{/if}
			</div>

			<div class="flex-1">
				<h3 class="text-sm font-bold tracking-widest uppercase opacity-80">
					{type === 'error' ? 'System Error' : 'Success'}
				</h3>
				<p class="mt-1 text-sm leading-relaxed opacity-90">{message}</p>
			</div>

			<button
				onclick={dismiss}
				class="rounded-lg p-1 transition-colors hover:bg-white/10"
				aria-label="Dismiss"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-4 w-4"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M6 18L18 6M6 6l12 12"
					/>
				</svg>
			</button>
		</div>
	</div>
{/if}
