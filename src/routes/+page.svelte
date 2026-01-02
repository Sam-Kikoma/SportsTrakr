<script lang="ts">
	import Navbar from '../components/Navbar.svelte';
</script>

<section
	class="relative flex min-h-screen flex-col bg-slate-950 text-slate-50 selection:bg-indigo-500/30"
>
	<div
		class="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_50%_-20%,rgba(120,119,198,0.15),transparent_50%)]"
	></div>

	<header class="sticky top-0 z-50 border-b border-slate-800/40 bg-slate-950/60 backdrop-blur-md">
		<Navbar signupLink="/signup" loginLink="/login" />
	</header>

	<div class="relative z-10 flex flex-1 flex-col items-center justify-center px-6 text-center">
		<h2 class="mb-6 text-5xl font-bold tracking-tight md:text-8xl">
			Track the Game. <br />
			<span class="bg-gradient-to-b from-slate-50 to-slate-400 bg-clip-text text-transparent">
				Own the Score.
			</span>
		</h2>

		<p class="mb-10 max-w-lg text-lg leading-relaxed text-slate-400 md:text-xl">Sports my boiii!</p>

		<div>
			<a
				href="/signup"
				class="inline-flex items-center justify-center rounded-full bg-slate-50 px-10 py-4 text-sm font-bold text-slate-950 transition-all hover:scale-[1.02] hover:bg-white active:scale-[0.98]"
			>
				Get Started
			</a>
		</div>
	</div>

	<footer
		class="relative z-10 border-t border-slate-900/50 py-8 text-center text-[10px] font-bold tracking-[0.2em] text-slate-600 uppercase"
	>
		&copy; {new Date().getFullYear()} Trakr &bull; All rights reserved.
	</footer>
</section>
