<script lang="ts">
	import Icon from '@iconify/svelte';

	// Declare the props for the Navbar component and make them optional
	export let signupLink: string | undefined = undefined; // Default value is undefined, so link is not rendered
	export let loginLink: string | undefined = undefined; // Default value is undefined, so link is not rendered
	export let logoutLink: string | undefined = undefined; // Default value is undefined, so link is not rendered

	let showMenu = true;
	const toggleMenu = () => {
		showMenu = !showMenu;
	};
</script>

<nav class="flex max-w-full items-center justify-between text-center">
	<div>
		<a href="/" class="text-2xl font-bold text-amber-600">Trakr</a>
	</div>

	<!-- Desktop menu -->
	{#if signupLink || loginLink || logoutLink}
		<div class="hidden md:flex md:gap-8">
			{#if signupLink}
				<a href={signupLink} class="hover:underline">Sign Up</a>
			{/if}
			{#if loginLink}
				<a href={loginLink}>Login</a>
			{/if}
			{#if logoutLink}
				<a href={logoutLink}>Logout</a>
			{/if}
		</div>
	{/if}

	<!-- Hamburger -->
	{#if !showMenu}
		<button class="md:hidden" on:click={toggleMenu}>
			<Icon icon="radix-icons:hamburger-menu" width="15" height="15" />
		</button>
	{:else}
		<button class="md:hidden" on:click={toggleMenu}>
			<Icon icon="radix-icons:cross-2" width="15" height="15" />
		</button>
	{/if}

	<!-- Mobile menu -->
	{#if signupLink || loginLink || logoutLink}
		<div
			class={`absolute top-[20%] left-0 flex h-screen w-full flex-col gap-8 text-center md:hidden ${showMenu ? '' : 'hidden'}`}
		>
			{#if signupLink}
				<a href={signupLink} class="hover:underline">Sign Up</a>
			{/if}
			{#if loginLink}
				<a href={loginLink}>Login</a>
			{/if}
			{#if logoutLink}
				<a href={logoutLink}>Logout</a>
			{/if}
		</div>
	{/if}
</nav>
