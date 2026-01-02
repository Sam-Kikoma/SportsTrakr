<script lang="ts">
	import Icon from '@iconify/svelte';
	import { onMount } from 'svelte';

	let fetchedFavs: any = $state(null);
	let isLoading = $state(true);

	const getFavs = async () => {
		isLoading = true;
		try {
			const res = await fetch('/dashboard/favourites');
			const data = await res.json();

			const detailedFavs = await Promise.all(
				data.map(async (item: any) => {
					const res = await fetch(
						`https://site.api.espn.com/apis/site/v2/sports/${item.sport}/${item.league}/scoreboard/${item.sportId}`
					);
					const event = await res.json();
					return {
						...item,
						teams: event.name,
						matchDate: event.date,
						homeScore: event.competitions[0]?.competitors[0]?.score ?? '-',
						awayScore: event.competitions[0]?.competitors[1]?.score ?? '-'
					};
				})
			);

			fetchedFavs = detailedFavs;
		} catch (err) {
			console.error('Error fetching favourites:', err);
		} finally {
			isLoading = false;
		}
	};

	const deleteFav = async (id: string) => {
		await fetch('/dashboard/favourites', {
			method: 'DELETE',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ id })
		});
		fetchedFavs = fetchedFavs.filter((fav: any) => fav.id !== id);
	};

	onMount(getFavs);
</script>

<div class="mx-auto w-full max-w-4xl px-4 py-8">
	<div class="mb-8 border-b border-slate-800 pb-4">
		<h2 class="text-2xl font-bold tracking-tight text-white">Your Favourites</h2>
		<p class="text-sm text-slate-500">Track the scores of the games you've saved.</p>
	</div>

	{#if isLoading}
		<div
			class="flex h-64 w-full flex-col items-center justify-center rounded-3xl border border-slate-800 bg-slate-900/20 backdrop-blur-sm"
		>
			<div
				class="h-10 w-10 animate-spin rounded-full border-2 border-indigo-500 border-t-transparent"
			></div>
			<p class="mt-4 text-sm font-medium text-slate-500">Syncing your stars...</p>
		</div>
	{:else if fetchedFavs && fetchedFavs.length > 0}
		<div class="flex flex-col gap-4">
			{#each fetchedFavs as item}
				<div
					class="group relative flex w-full items-center justify-between overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/50 p-5 transition-all hover:border-slate-700 hover:bg-slate-900/80"
				>
					<div class="flex items-center gap-6">
						<div class="flex flex-col border-r border-slate-800 pr-6">
							<span class="text-[10px] font-bold tracking-widest text-slate-500 uppercase"
								>Match Date</span
							>
							<span class="text-sm font-medium text-slate-300">{item.matchDate.split('T')[0]}</span>
						</div>

						<div class="flex flex-col gap-1">
							<div class="flex items-center gap-3">
								<span class="w-32 truncate text-sm font-semibold text-slate-200">
									{item.teams.split(' at ')[1]}
								</span>
								<span class="text-lg font-black tracking-tighter text-white">{item.homeScore}</span>
							</div>
							<div class="flex items-center gap-3">
								<span class="w-32 truncate text-sm font-semibold text-slate-400">
									{item.teams.split(' at ')[0]}
								</span>
								<span class="text-lg font-black tracking-tighter text-slate-400"
									>{item.awayScore}</span
								>
							</div>
						</div>
					</div>

					<button
						class="flex h-11 w-11 items-center justify-center rounded-full border border-slate-800 bg-slate-900/50 text-slate-500 transition-all hover:border-red-500/50 hover:bg-red-500/10 hover:text-red-500 active:scale-90"
						onclick={() => deleteFav(item.id)}
						aria-label="Remove from favourites"
					>
						<Icon icon="lucide:trash-2" width="20" height="20" />
					</button>
				</div>
			{/each}
		</div>
	{:else}
		<div
			class="flex h-64 w-full flex-col items-center justify-center rounded-3xl border border-dashed border-slate-800 p-8 text-center"
		>
			<div class="mb-4 rounded-full bg-slate-900 p-4 text-slate-600">
				<Icon icon="lucide:star-off" width="32" height="32" />
			</div>
			<h3 class="text-lg font-semibold text-slate-300">No favourites yet</h3>
			<p class="mt-1 text-sm text-slate-500">
				Star some games to track them here across different leagues.
			</p>
		</div>
	{/if}
</div>
