<script lang="ts">
	import Sidebar from '../components/Sidebar.svelte';
	import '../app.css';
</script>

<div class="app bg-background-color text-text-color min-h-screen leading-8 max-w-[1600px] mx-auto">
	<Sidebar />
	<main class="ml-0 lg:ml-64 px-4 sm:px-8 md:px-40 lg:px-36 py-16 transition-all duration-300">
		<slot />
	</main>
</div>
