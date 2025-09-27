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

<h1 class="mt-8 mb-2 h-[3.5rem] text-4xl md:mt-0">{fullText}</h1>
