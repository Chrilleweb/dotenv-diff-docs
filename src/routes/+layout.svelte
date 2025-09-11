<script lang="ts">
	import Sidebar from '../components/Sidebar.svelte';
	import '../app.css';
</script>

<div class="app bg-background-color text-text-color min-h-screen leading-8 max-w-[1800px] mx-auto">
	<Sidebar />
	<main class="ml-64 px-36 py-16">
		<slot />
	</main>
</div>
