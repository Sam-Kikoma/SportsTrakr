<script lang="ts">
	interface Props {
		items: string[];
		active: string;
		onTabChange: (item: string) => void;
	}
	let { items, active, onTabChange }: Props = $props();
</script>

<div class="flex items-center gap-1">
	{#each items as item}
		<button
			class="relative px-6 py-2 text-sm font-bold capitalize transition-all duration-200
            {item === active ? 'text-white' : 'text-slate-500 hover:text-slate-300'}"
			onclick={() => onTabChange(item)}
		>
			<span class="relative z-10">{item}</span>

			{#if item === active}
				<div
					class="absolute inset-0 z-0 rounded-xl bg-slate-800 shadow-inner"
					aria-hidden="true"
				></div>
			{/if}
		</button>
	{/each}
</div>

<style>
	button:active {
		transform: scale(0.96);
	}
</style>
