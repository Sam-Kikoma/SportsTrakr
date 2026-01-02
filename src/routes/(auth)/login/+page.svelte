<script lang="ts">
	import { enhance } from '$app/forms';
	import Toast from '../../../components/Toast.svelte';
	let { form } = $props();
</script>

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
