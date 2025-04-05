<script lang="ts">
	import Navbar from '../components/Navbar.svelte';
</script>

<section class="flex h-screen flex-col justify-between bg-gray-900 text-white">
	<Navbar />
	<div class="flex flex-1 flex-col items-center justify-center px-6 text-center md:px-0">
		<h2 class="mb-4 text-4xl leading-tight font-extrabold md:text-6xl">
			Track the Game. <br />
			Own the Score.
		</h2>
		<p class="mb-8 max-w-xl text-lg text-gray-300 md:text-xl">
			Your personalized hub for real-time scores, stats, and football insights — beautifully simple
			and blazingly fast.
		</p>
		<a
			href="/signup"
			class="rounded-full bg-amber-600 px-8 py-3 text-lg font-semibold text-black transition hover:bg-amber-500"
		>
			Get Started for Free
		</a>
	</div>

	<footer class="py-6 text-center text-sm text-gray-400">
		&copy; {new Date().getFullYear()} Trakr. All rights reserved.
	</footer>
</section>
