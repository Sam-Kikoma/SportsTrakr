<script lang="ts">
</script>

<div class="mx-auto my-auto w-full max-w-xs rounded-xl bg-gray-600 text-white">
	<form action="" class="flex flex-col px-8 py-6">
		<h1 class="mb-4 text-center text-2xl font-bold">Login</h1>
		<div class="mb-8">
			<label for="email" class="mb-2 block font-bold">Email</label>
			<input
				type="email"
				name="email"
				id="email"
				class="appearance-none rounded-2xl border-none p-2 ring-1 ring-gray-300 focus:ring-2 focus:ring-amber-500 focus:outline-none"
				placeholder="name@email.com"
				required
			/>
		</div>
		<div class="mb-8">
			<label for="password" class="mb-2 block font-bold">Password</label>
			<input
				type="password"
				name="password"
				id="password"
				class="appearance-none rounded-2xl border-none p-2 ring-1 ring-gray-300 focus:ring-2 focus:ring-amber-500 focus:outline-none"
				required
				placeholder="******"
			/>
		</div>
		<div class="mx-auto mb-2">
			<button
				type="submit"
				class=" rounded-2xl bg-amber-200 px-4 py-2 text-black shadow-2xl hover:bg-amber-600"
				>Submit</button
			>
		</div>
	</form>
</div>
