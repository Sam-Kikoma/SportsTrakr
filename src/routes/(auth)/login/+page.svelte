<script lang="ts">
	import { enhance } from '$app/forms';
	import Toast from '../../../components/Toast.svelte';
	let { form } = $props();
</script>

<!-- Toast for test credentials -->
<div
	class="toast-info"
	style="background: #e0f7fa; color: #006064; padding: 0.75rem 1.25rem; border-radius: 6px; margin-bottom: 1rem; font-size: 1rem; display: flex; align-items: center; gap: 0.5rem;"
>
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="20"
		height="20"
		fill="currentColor"
		viewBox="0 0 20 20"
		><path
			d="M10 2a8 8 0 100 16 8 8 0 000-16zm.75 12.25h-1.5v-1.5h1.5v1.5zm0-3h-1.5V6.5h1.5v2.75z"
		/></svg
	>
	<span
		>Use <strong>test4@email.com</strong> and <strong>test4</strong> as test credentials to log in.</span
	>
</div>

<div class="flex flex-1 items-center justify-center p-6">
	<div class="w-full max-w-md">
		<form
			class="relative rounded-2xl border border-slate-800 bg-slate-900/40 p-8 shadow-2xl backdrop-blur-sm"
			method="POST"
			use:enhance
		>
			<div class="mb-10 text-center">
				<h1 class="text-3xl font-bold tracking-tight text-white">Welcome back</h1>
				<p class="mt-2 text-sm text-slate-400">Enter your credentials to access your account</p>
			</div>

			<Toast message={form?.message || ''} type="error" />

			<div class="space-y-6">
				<div>
					<label
						for="email"
						class="mb-2 block text-xs font-bold tracking-widest text-slate-500 uppercase"
					>
						Email Address
					</label>
					<input
						type="email"
						name="email"
						id="email"
						class="w-full rounded-lg border border-slate-800 bg-slate-950 px-4 py-3 text-white transition-all placeholder:text-slate-600 focus:border-indigo-500/50 focus:ring-4 focus:ring-indigo-500/10 focus:outline-none"
						placeholder="name@email.com"
						required
					/>
				</div>

				<div>
					<div class="mb-2 flex items-center justify-between">
						<label
							for="password"
							class="block text-xs font-bold tracking-widest text-slate-500 uppercase"
						>
							Password
						</label>
					</div>
					<input
						type="password"
						name="password"
						id="password"
						class="w-full rounded-lg border border-slate-800 bg-slate-950 px-4 py-3 text-white transition-all placeholder:text-slate-600 focus:border-indigo-500/50 focus:ring-4 focus:ring-indigo-500/10 focus:outline-none"
						required
						placeholder="••••••••"
					/>
				</div>

				<div class="pt-2">
					<button
						type="submit"
						class="w-full rounded-lg bg-slate-50 py-3 text-sm font-bold text-slate-950 transition-all hover:scale-[1.01] hover:bg-white active:scale-[0.99]"
					>
						Sign In
					</button>
				</div>

				<div class="text-center">
					<a
						href="/signup"
						class="text-sm font-medium text-slate-400 transition-colors hover:text-white"
					>
						Don't have an account? <span class="text-indigo-400 underline underline-offset-4"
							>Create one</span
						>
					</a>
				</div>
			</div>
		</form>
	</div>
</div>
