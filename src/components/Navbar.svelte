<script lang="ts">
	import Icon from '@iconify/svelte';
	let showMenu = true;
	const toggleMenu = () => {
		showMenu = !showMenu;
	};
</script>

<nav class="flex max-w-full items-center justify-between px-8 py-8 text-white">
	<div><a href="/" class="text-2xl font-bold text-amber-600">Trakr</a></div>
	<div class="hidden md:flex md:gap-8">
		<a href="/">Scores</a>
		<a href="/">Favourites</a>
		<a href="/">News</a>
	</div>
	<div class="hidden md:flex md:gap-4">
		<a href="/signup" class="hover:underline">Sign Up</a>
		<a href="/login">Login</a>
	</div>
	<!-- Hamburger -->
	{#if !showMenu}
		<button class="md:hidden" on:click={toggleMenu}
			><Icon icon="radix-icons:hamburger-menu" width="15" height="15" /></button
		>
	{:else}
		<button class="md:hidden" on:click={toggleMenu}>
			<Icon icon="radix-icons:cross-2" width="15" height="15" />
		</button>
	{/if}
	<!-- Mobile menu -->
	<div
		class={`absolute top-[20%] left-0 flex h-screen w-full flex-col gap-8 text-center md:hidden ${showMenu ? '' : 'hidden'}`}
	>
		<a href="/">Scores</a>
		<a href="/">Favourites</a>
		<a href="/">News</a>
	</div>
</nav>
