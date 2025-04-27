<script lang="ts">
	import { onMount } from 'svelte';
	import Card from './Card.svelte';

	let fetchedData: any = $state(null);

	const fetchData = async () => {
		try {
			const url = '/dashboard/nfl';
			const res = await fetch(url);
			fetchedData = await res.json();
		} catch (err) {
			console.error('Error fetching data:', err);
		}
	};

	onMount(fetchData);
</script>

<div class="flex w-full flex-col gap-8 p-4 md:flex-row md:items-start">
	{#if fetchedData}
		<div class="flex w-full flex-col gap-6">
			{#each fetchedData.events as event}
				<Card
					teams={event.name}
					matchDate={event.date}
					homeScore={event.competitions[0].competitors[0].score}
					awayScore={event.competitions[0].competitors[1].score}
					sportType="nfl"
					gameID={event.id}
					add={false}
				/>
			{/each}
		</div>
	{/if}
</div>

<style>
</style>
