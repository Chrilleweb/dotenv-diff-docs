<script lang="ts">
	import { onMount } from 'svelte';
	import { startTypewriter } from '$lib/typeWriter';

	let displayedText = 'dotenv-diff';
	const fullText = 'dotenv-diff';

	function updateDisplayedText(text: string) {
		displayedText = text;
	}

	onMount(() => {
		startTypewriter(fullText, updateDisplayedText);
	});
</script>

<h1 class="mb-4 h-[3.5rem] text-4xl">{displayedText}</h1>
