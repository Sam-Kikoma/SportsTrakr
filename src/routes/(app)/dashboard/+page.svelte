<script lang="ts">
	import Basketball from '../../../components/Basketball.svelte';
	import Football from '../../../components/Football.svelte';
	import Navbar from '../../../components/Navbar.svelte';
	import Tabs from '../../../components/Tabs.svelte';
	import Nfl from '../../../components/Nfl.svelte';
	import Favourites from '../../../components/Favourites.svelte';

	// Tabs
	let items = ['football', 'basketball', 'nfl', 'favourites'];
	let activeItem = $state('football');
	const handleChange = (item: string) => {
		activeItem = item;
	};
</script>

<div class="flex h-screen flex-col bg-gray-900 px-6 py-4 text-white">
	<div>
		<Navbar logoutLink="/logout" />
	</div>
	<Tabs {items} active={activeItem} onTabChange={handleChange} />
	<div>
		{#if activeItem === 'football'}
			<Football />
		{:else if activeItem === 'basketball'}
			<Basketball />
		{:else if activeItem === 'nfl'}
			<Nfl />
		{:else if activeItem === 'favourites'}
			<Favourites />
		{/if}
	</div>
</div>

<style>
</style>
