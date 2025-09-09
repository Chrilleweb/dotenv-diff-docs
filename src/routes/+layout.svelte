<script lang="ts">
	import Sidebar from '../components/Sidebar.svelte';
	import '../app.css';
</script>

<div class="app">
	<Sidebar />
	<main class="ml-64 p-8">
		<slot />
	</main>
</div>
