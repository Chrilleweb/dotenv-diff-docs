<script lang="ts">
	import { onMount } from 'svelte';
	import { startTypewriter } from '$lib/typeWriter';

	export let fullText: string;

	function updateDisplayedText(text: string) {
		fullText = text;
	}

	onMount(() => {
		startTypewriter(fullText, updateDisplayedText);
	});
</script>

<h1 class="mb-4 h-[3.5rem] text-4xl">{fullText}</h1>
