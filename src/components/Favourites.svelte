<script lang="ts">
	import Icon from '@iconify/svelte';
	import { onMount } from 'svelte';

	let fetchedFavs: any = $state(null);

	const getFavs = async () => {
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

{#if fetchedFavs}
	<div class="flex flex-col gap-6 p-4">
		{#each fetchedFavs as item}
			<div class=" flex w-full justify-between rounded-xl bg-indigo-200 p-4 shadow-sm">
				<div class="text-sm text-gray-500">{item.matchDate.split('T')[0]}</div>

				<div class="flex flex-col text-center">
					<p class="font-semibold text-gray-700">
						{item.teams.split(' at ')[1]}: {item.homeScore}
					</p>
					<p class="font-semibold text-gray-700">
						{item.teams.split(' at ')[0]}: {item.awayScore}
					</p>
				</div>

				<button class="text-red-500 hover:text-red-700" onclick={() => deleteFav(item.id)}>
					<Icon icon="ri:delete-bin-2-line" width="20" height="20" />
				</button>
			</div>
		{/each}
	</div>
{:else}
	<div class="p-4 text-center text-gray-500">No favourites yet.</div>
{/if}

<style>
</style>
