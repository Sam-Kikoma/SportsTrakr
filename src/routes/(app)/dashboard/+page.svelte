<script lang="ts">
	import Basketball from '../../../components/Basketball.svelte';
	import Football from '../../../components/Football.svelte';
	import Navbar from '../../../components/Navbar.svelte';
	import Tabs from '../../../components/Tabs.svelte';
	import Nfl from '../../../components/Nfl.svelte';
	import Favourites from '../../../components/Favourites.svelte';

	let items = ['football', 'basketball', 'nfl', 'favourites'];
	let activeItem = $state('football');

	const handleChange = (item: string) => {
		activeItem = item;
	};
</script>

<header class="sticky top-0 z-50 border-b border-slate-800/40 bg-slate-950/60 backdrop-blur-md">
	<Navbar logoutLink="/logout" />
</header>

<main class="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
	<div class="mb-8 flex justify-center">
		<div
			class="inline-block rounded-2xl border border-slate-800 bg-slate-900/40 p-1.5 backdrop-blur-sm"
		>
			<Tabs {items} active={activeItem} onTabChange={handleChange} />
		</div>
	</div>

	<section
		class="relative min-h-[60vh] rounded-3xl border border-slate-800/50 bg-slate-900/20 p-6 backdrop-blur-sm"
	>
		{#if activeItem === 'football'}
			<Football />
		{:else if activeItem === 'basketball'}
			<Basketball />
		{:else if activeItem === 'nfl'}
			<Nfl />
		{:else if activeItem === 'favourites'}
			<Favourites />
		{/if}
	</section>
</main>
