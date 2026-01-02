<script lang="ts">
	import { onMount } from 'svelte';
	import Card from './Card.svelte';
	import Icon from '@iconify/svelte';

	let selectedLeague: string = $state('eng.1');
	let fetchedData: any = $state(null);
	let isLoading = $state(true);

	const fetchData = async (league = '') => {
		isLoading = true;
		try {
			const url = league ? `/dashboard/football?league=${league}` : '/dashboard/football';
			const res = await fetch(url);
			fetchedData = await res.json();
		} catch (err) {
			console.error('Error fetching data:', err);
		} finally {
			isLoading = false;
		}
	};

	const handleChange = () => {
		fetchedData = null;
		fetchData(selectedLeague);
	};

	onMount(fetchData);
</script>

<div class="flex w-full flex-col gap-10 md:flex-row md:items-start">
	<div class="w-full shrink-0 md:sticky md:top-24 md:w-72">
		<label
			for="sports"
			class="mb-2 block text-xs font-bold tracking-widest text-slate-500 uppercase"
		>
			Football League
		</label>
		<div class="relative">
			<select
				name="sports"
				id="sports"
				bind:value={selectedLeague}
				onchange={handleChange}
				class="w-full appearance-none rounded-xl border border-slate-800 bg-slate-900 px-4 py-3.5 text-sm font-medium text-slate-200 transition-all hover:border-slate-700 focus:border-indigo-500/50 focus:ring-4 focus:ring-indigo-500/10 focus:outline-none"
			>
				<option value="" selected disabled hidden>Choose here</option>
				<option value="eng.1">Premier League</option>
				<option value="esp.1">La Liga</option>
				<option value="ger.1">Bundesliga</option>
				<option value="ita.1">Serie A</option>
				<option value="fra.1">Ligue 1</option>
			</select>
			<div class="pointer-events-none absolute inset-y-0 right-4 flex items-center text-slate-500">
				<Icon icon="lucide:chevron-down" width="16" height="16" />
			</div>
		</div>
	</div>

	<div class="flex-1">
		{#if isLoading}
			<div
				class="flex h-64 w-full flex-col items-center justify-center rounded-3xl border border-slate-800 bg-slate-900/20 backdrop-blur-sm"
			>
				<div
					class="h-10 w-10 animate-spin rounded-full border-2 border-indigo-500 border-t-transparent"
				></div>
				<p class="mt-4 text-sm font-medium text-slate-500">Scanning the pitch...</p>
			</div>
		{:else if fetchedData && fetchedData.events && fetchedData.events.length > 0}
			<div class="grid w-full gap-4">
				{#each fetchedData.events as event}
					<Card
						teams={event.name}
						matchDate={event.date}
						homeScore={event.competitions[0].competitors[0].score}
						awayScore={event.competitions[0].competitors[1].score}
						sportType="soccer"
						gameID={event.id}
						league={selectedLeague}
						add={true}
					/>
				{/each}
			</div>
		{:else}
			<div
				class="flex h-64 w-full flex-col items-center justify-center rounded-3xl border border-dashed border-slate-800 p-8 text-center"
			>
				<div class="mb-4 rounded-full bg-slate-900 p-4 text-slate-600">
					<Icon icon="lucide:calendar-x" width="32" height="32" />
				</div>
				<h3 class="text-lg font-semibold text-slate-300">No matches found</h3>
				<p class="mt-1 text-sm text-slate-500">
					There are no games scheduled for this league today.
				</p>
			</div>
		{/if}
	</div>
</div>
