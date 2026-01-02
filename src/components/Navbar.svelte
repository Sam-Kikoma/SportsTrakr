<script lang="ts">
	import Icon from '@iconify/svelte';

	interface Props {
		signupLink?: string;
		loginLink?: string;
		logoutLink?: string;
	}

	let { signupLink = undefined, loginLink = undefined, logoutLink = undefined }: Props = $props();

	let showMenu = $state(false);
	const toggleMenu = () => {
		showMenu = !showMenu;
	};
</script>

<nav class="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4">
	<div class="flex items-center">
		<a
			href="/"
			class="group flex items-center gap-2 text-2xl font-black tracking-tighter text-white"
		>
			<div
				class="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-500 transition-colors group-hover:bg-indigo-400"
			>
				<Icon icon="lucide:trophy" class="text-slate-950" width="20" height="20" />
			</div>
			Trakr
		</a>
	</div>

	<div class="hidden items-center gap-6 md:flex">
		{#if loginLink}
			<a
				href={loginLink}
				class="text-sm font-bold text-slate-400 transition-colors hover:text-white"
			>
				Log in
			</a>
		{/if}
		{#if signupLink}
			<a
				href={signupLink}
				class="rounded-full bg-slate-50 px-5 py-2 text-sm font-bold text-slate-950 transition-all hover:scale-[1.02] hover:bg-white"
			>
				Get Started
			</a>
		{/if}
		{#if logoutLink}
			<a
				href={logoutLink}
				class="group flex items-center gap-2 text-sm font-bold text-slate-400 transition-colors hover:text-red-400"
			>
				Logout
				<Icon icon="lucide:log-out" width="16" height="16" />
			</a>
		{/if}
	</div>

	<button
		class="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-800 text-slate-400 md:hidden"
		onclick={toggleMenu}
	>
		{#if !showMenu}
			<Icon icon="lucide:menu" width="20" height="20" />
		{:else}
			<Icon icon="lucide:x" width="20" height="20" />
		{/if}
	</button>

	{#if showMenu}
		<div
			class="absolute inset-x-0 top-full z-[100] border-b border-slate-800 bg-slate-950/95 p-6 backdrop-blur-xl md:hidden"
		>
			<div class="flex flex-col gap-6 text-center">
				{#if signupLink}
					<a href={signupLink} class="text-lg font-bold text-white" onclick={toggleMenu}>Sign Up</a>
				{/if}
				{#if loginLink}
					<a href={loginLink} class="text-lg font-bold text-slate-400" onclick={toggleMenu}>Login</a
					>
				{/if}
				{#if logoutLink}
					<a href={logoutLink} class="text-lg font-bold text-red-400" onclick={toggleMenu}>Logout</a
					>
				{/if}
			</div>
		</div>
	{/if}
</nav>
