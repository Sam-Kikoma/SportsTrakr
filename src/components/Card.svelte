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

<div class="fixed top-4 right-4 z-[100] flex flex-col gap-2">
	<Toast message={errorMessage} type="error" />
	<Toast message={successMessage} type="info" />
</div>

<div
	class="group relative flex w-full items-center justify-between overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/50 p-5 transition-all hover:border-slate-700 hover:bg-slate-900/80"
>
	<div class="flex items-center gap-6">
		<div class="flex flex-col border-r border-slate-800 pr-6">
			<span class="text-[10px] font-bold tracking-widest text-slate-500 uppercase">Match Date</span>
			<span class="text-sm font-medium text-slate-300">{matchDate.split('T')[0]}</span>
		</div>

		<div class="flex flex-col gap-1">
			<div class="flex items-center gap-3">
				<span class="w-32 truncate text-sm font-semibold text-slate-200">{homeTeam}</span>
				<span class="text-lg font-black tracking-tighter text-white">{homeScore ?? '-'}</span>
			</div>
			<div class="flex items-center gap-3">
				<span class="w-32 truncate text-sm font-semibold text-slate-400">{awayTeam}</span>
				<span class="text-lg font-black tracking-tighter text-slate-400">{awayScore ?? '-'}</span>
			</div>
		</div>
	</div>

	<div class="flex items-center gap-4">
		{#if add}
			<button
				class="flex h-11 w-11 items-center justify-center rounded-full border border-slate-700 bg-slate-800 text-slate-400 transition-all hover:border-yellow-500/50 hover:bg-yellow-500/10 hover:text-yellow-500 active:scale-90"
				onclick={addToFavorites}
				aria-label="Add to favorites"
			>
				<Icon icon="uit:star" width="20" height="20" />
			</button>
		{:else}
			<div
				class="flex h-11 w-11 items-center justify-center rounded-full border border-slate-800 bg-slate-900 text-slate-700 opacity-50"
			>
				<Icon icon="uit:star" width="20" height="20" />
			</div>
		{/if}
	</div>
</div>
