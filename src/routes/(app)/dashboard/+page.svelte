<script lang="ts">
	import Navbar from '../../../components/Navbar.svelte';

	export let data;
</script>

<div class="flex h-screen flex-col justify-between bg-gray-900 text-white">
	<Navbar logoutLink="/logout" />
</div>

<style>
</style>
