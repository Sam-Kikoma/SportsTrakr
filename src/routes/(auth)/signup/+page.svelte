<script lang="ts">
	import { enhance } from '$app/forms';
	import Error from '../../../components/Error.svelte';

	export let form: any;
</script>

<div class="flex h-screen w-full items-center justify-center bg-gray-900 p-1 text-white">
	<form class="flex flex-col rounded-xl bg-gray-800 px-10 py-8" method="POST" use:enhance>
		<h1 class="mb-8 text-center text-3xl font-bold text-amber-200">Sign Up</h1>
		<Error message={form?.message} />
		<div class="mb-6">
			<label for="email" class="mb-3 block text-sm font-medium text-gray-300">Email</label>
			<input
				type="email"
				name="email"
				id="email"
				class="w-full rounded-xl bg-gray-800 p-4 text-white ring-1 ring-gray-700 placeholder:text-gray-500 focus:ring-2 focus:ring-amber-500 focus:outline-none"
				placeholder="name@email.com"
				required
			/>
		</div>

		<div class="mb-6">
			<label for="username" class="mb-3 block text-sm font-medium text-gray-300">Username</label>
			<input
				type="text"
				name="username"
				id="username"
				class="w-full rounded-xl bg-gray-800 p-4 text-white ring-1 ring-gray-700 placeholder:text-gray-500 focus:ring-2 focus:ring-amber-500 focus:outline-none"
				placeholder="Enter a username"
				required
			/>
		</div>

		<div class="mb-8">
			<label for="password" class="mb-3 block text-sm font-medium text-gray-300">Password</label>
			<input
				type="password"
				name="password"
				id="password"
				class="w-full rounded-xl bg-gray-800 p-4 text-white ring-1 ring-gray-700 placeholder:text-gray-500 focus:ring-2 focus:ring-amber-500 focus:outline-none"
				required
				placeholder="••••••••"
			/>
		</div>

		<div class="mx-auto mt-4">
			<button
				type="submit"
				class="mb-4 w-full rounded-xl bg-amber-600 px-6 py-3 text-lg font-semibold text-black transition hover:bg-amber-500 focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 focus:ring-offset-gray-900 focus:outline-none"
			>
				Create Account
			</button>
			<a href="/login" class="block text-center underline">Already have an account? Login</a>
		</div>
	</form>
</div>
