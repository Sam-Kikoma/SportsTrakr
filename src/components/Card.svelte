<script lang="ts">
	import Icon from '@iconify/svelte';
	import Toast from './Toast.svelte';
	interface props {
		teams: string;
		matchDate: string;
		homeScore?: string;
		awayScore?: string;
		sportType: string;
		gameID: string;
		league?: string;
		add: boolean;
	}
	let errorMessage = $state(null);
	let successMessage = $state('');
	let { teams, matchDate, homeScore, awayScore, sportType, gameID, league, add }: props = $props();
	const [awayTeam, homeTeam] = teams.split(' at ');
	const addToFavorites = async () => {
		const res = await fetch('/dashboard/favourites', {
			method: 'POST',
			body: JSON.stringify({
				sportId: gameID,
				sport: sportType,
				league: league
			})
		});
		if (!res.ok) {
			const errorData = await res.json();
			errorMessage = errorData.message;
		} else {
			successMessage = 'Game was added to favourites';
		}
	};
</script>

<div class="absolute top-0 right-0">
	<Toast message={errorMessage} type="error" />
	<Toast message={successMessage} type="info" />
</div>
<div
	class="relative flex w-full items-center justify-between rounded-xl bg-indigo-200 p-4 shadow-sm"
>
	<div class="text-sm text-gray-500">{matchDate.split('T')[0]}</div>

	<div class="flex flex-col text-center">
		<p class="font-semibold text-gray-700">{homeTeam}: {homeScore ?? '-'}</p>
		<p class="font-semibold text-gray-700">{awayTeam}: {awayScore ?? '-'}</p>
	</div>

	{#if add === true}
		<button
			class="rounded-md bg-indigo-500 px-3 py-1 text-sm text-white hover:bg-indigo-600"
			onclick={addToFavorites}
		>
			<Icon icon="uit:star" width="24" height="24" />
		</button>
	{:else}
		<button
			class="rounded-md bg-indigo-500 px-3 py-1 text-sm text-white hover:bg-indigo-600"
			onclick={addToFavorites}
			disabled
		>
			<Icon icon="uit:star" width="24" height="24" />
		</button>
	{/if}
</div>

<style>
</style>
