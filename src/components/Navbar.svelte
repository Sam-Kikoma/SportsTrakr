<script lang="ts">
	import Icon from '@iconify/svelte';

	interface Props {
		signupLink?: string;
		loginLink?: string;
		logoutLink?: string;
	}
	// Navbar props
	let { signupLink = undefined, loginLink = undefined, logoutLink = undefined }: Props = $props();

	let showMenu = $state(false);
	const toggleMenu = () => {
		showMenu = !showMenu;
	};
</script>

<nav class="flex max-w-full items-center justify-between text-center">
	<div class="p-4">
		<a href="/" class="text-2xl font-bold text-amber-600">Trakr</a>
	</div>

	<!-- Desktop menu -->
	{#if signupLink || loginLink || logoutLink}
		<div class="hidden p-4 md:flex md:gap-8">
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
		<button class="p-4 md:hidden" onclick={toggleMenu}>
			<Icon icon="radix-icons:hamburger-menu" width="15" height="15" />
		</button>
	{:else}
		<button class="p-4 md:hidden" onclick={toggleMenu}>
			<Icon icon="radix-icons:cross-2" width="15" height="15" />
		</button>
	{/if}

	<!-- Mobile menu -->
	{#if signupLink || loginLink || logoutLink}
		<div
			class={`absolute top-[5%] left-0 flex h-[20%] w-full flex-col gap-8 bg-gray-900 text-center md:hidden ${showMenu ? '' : 'hidden'}`}
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
