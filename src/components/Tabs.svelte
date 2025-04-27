<script lang="ts">
	interface Props {
		items: string[];
		active: string;
		onTabChange: (item: string) => void;
	}
	let { items, active, onTabChange }: Props = $props();
</script>

<div>
	<div class="flex justify-center gap-16">
		{#each items as item}
			<button
				class={item === active ? 'text-amber-400 underline underline-offset-8' : ''}
				onclick={() => onTabChange(item)}
			>
				{item}
			</button>
		{/each}
	</div>
</div>

<style>
</style>
