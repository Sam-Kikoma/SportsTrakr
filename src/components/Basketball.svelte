<script lang="ts">
	import { onMount } from 'svelte';
	import Card from './Card.svelte';

	let selectedLeague: string = $state('nba');
	let fetchedData: any = $state(null);

	const fetchData = async (league = '') => {
		try {
			const url = league ? `/dashboard/basketball?league=${league}` : '/dashboard/basketball';
			const res = await fetch(url);
			fetchedData = await res.json();
		} catch (err) {
			console.error('Error fetching data:', err);
		}
	};

	const handleChange = () => {
		fetchedData = null;
		fetchData(selectedLeague);
	};

	onMount(fetchData);
</script>

<div class="flex w-full flex-col gap-8 p-4 md:flex-row md:items-start">
	<div class="w-full md:w-1/3">
		<select
			name="sports"
			id="sports"
			bind:value={selectedLeague}
			onchange={handleChange}
			class="w-full rounded-lg border border-gray-300 bg-white p-3 text-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none"
		>
			<option value="" selected disabled hidden>Choose here</option>
			<option value="nba">NBA</option>
			<option value="wnba">WNBA</option>
			<option value="mens-college-basketball">Mens College Basketball</option>
			<option value="womens-college-basketball">Womens College Basketball</option>
		</select>
	</div>

	{#if fetchedData}
		<div class="flex w-full flex-col gap-6">
			{#each fetchedData.events as event}
				<Card
					teams={event.name}
					matchDate={event.date}
					homeScore={event.competitions[0].competitors[0].score}
					awayScore={event.competitions[0].competitors[1].score}
					sportType="basketball"
					gameID={event.id}
					league={selectedLeague}
					add={true}
				/>
			{/each}
		</div>
	{/if}
</div>

<style>
</style>
