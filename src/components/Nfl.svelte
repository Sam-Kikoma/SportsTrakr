<script lang="ts">
	import { onMount } from 'svelte';
	import Card from './Card.svelte';
	import Icon from '@iconify/svelte';

	let fetchedData: any = $state(null);
	let isLoading = $state(true);

	const fetchData = async () => {
		isLoading = true;
		try {
			const url = '/dashboard/nfl';
			const res = await fetch(url);
			fetchedData = await res.json();
		} catch (err) {
			console.error('Error fetching data:', err);
		} finally {
			isLoading = false;
		}
	};

	onMount(fetchData);
</script>

<div class="mx-auto w-full max-w-4xl py-6">
	<div class="mb-8 flex items-center justify-between border-b border-slate-800 pb-6">
		<div>
			<h2 class="text-2xl font-bold tracking-tight text-white">NFL Scoreboard</h2>
			<p class="text-sm text-slate-500">Real-time updates from the gridiron.</p>
		</div>
		<div
			class="hidden rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-1.5 text-[10px] font-bold tracking-widest text-indigo-400 uppercase md:block"
		>
			Live Updates
		</div>
	</div>

	<div class="flex w-full flex-col gap-8 md:flex-row md:items-start">
		<div class="flex-1">
			{#if isLoading}
				<div
					class="flex h-64 w-full flex-col items-center justify-center rounded-3xl border border-slate-800 bg-slate-900/20 backdrop-blur-sm"
				>
					<div
						class="h-10 w-10 animate-spin rounded-full border-2 border-indigo-500 border-t-transparent"
					></div>
					<p class="mt-4 text-sm font-medium text-slate-500">Loading matchups...</p>
				</div>
			{:else if fetchedData && fetchedData.events && fetchedData.events.length > 0}
				<div class="grid w-full gap-4">
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
			{:else}
				<div
					class="flex h-64 w-full flex-col items-center justify-center rounded-3xl border border-dashed border-slate-800 p-8 text-center"
				>
					<div class="mb-4 rounded-full bg-slate-900 p-4 text-slate-600">
						<Icon icon="lucide:drafting-compass" width="32" height="32" />
					</div>
					<h3 class="text-lg font-semibold text-slate-300">No games today</h3>
					<p class="mt-1 text-sm text-slate-500">
						Check back later for the next scheduled NFL kickoff.
					</p>
				</div>
			{/if}
		</div>
	</div>
</div>
