<script lang="ts">
	import Sidebar from '../components/Sidebar.svelte';
	import '../app.css';
</script>

<div class="app mx-auto min-h-screen max-w-[1600px] bg-background-color leading-8 text-text-color">
	<Sidebar />
	<main class="ml-0 px-4 py-16 transition-all duration-300 sm:px-8 md:px-40 lg:ml-64 lg:px-36">
		<slot />
	</main>
</div>
