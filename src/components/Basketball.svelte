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

<div class="flex w-full flex-col gap-10 md:flex-row md:items-start">
	<div class="w-full shrink-0 md:sticky md:top-24 md:w-72">
		<label
			for="sports"
			class="mb-2 block text-xs font-bold tracking-widest text-slate-500 uppercase"
		>
			Select League
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
				<option value="nba">NBA</option>
				<option value="wnba">WNBA</option>
				<option value="mens-college-basketball">Men's College Basketball</option>
				<option value="womens-college-basketball">Women's College Basketball</option>
			</select>
			<div class="pointer-events-none absolute inset-y-0 right-4 flex items-center text-slate-500">
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
						d="M19 9l-7 7-7-7"
					/>
				</svg>
			</div>
		</div>
	</div>

	<div class="flex-1">
		{#if fetchedData}
			<div class="grid w-full gap-4 lg:grid-cols-1">
				{#each fetchedData.events as event}
					<div class="group relative transition-all duration-300">
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
					</div>
				{/each}
			</div>
		{:else}
			<div
				class="flex h-64 w-full items-center justify-center rounded-3xl border border-dashed border-slate-800"
			>
				<div class="flex flex-col items-center gap-3">
					<div
						class="h-8 w-8 animate-spin rounded-full border-2 border-indigo-500 border-t-transparent"
					></div>
					<p class="text-sm font-medium text-slate-500">Fetching live scores...</p>
				</div>
			</div>
		{/if}
	</div>
</div>
