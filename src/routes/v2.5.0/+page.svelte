<script lang="ts">
	import Title from '$components/Title.svelte';
	import BackNext from '$components/BackNext.svelte';
	import OpenImg from '$components/modals/OpenGif.svelte';
	import ClickableImage from '$components/ClickableImage.svelte';

	let showModal = false;
	let currentImageSrc = '';

	function openModal(imgSrc: string) {
		currentImageSrc = imgSrc;
		showModal = true;
	}

	function closeModal() {
		showModal = false;
		currentImageSrc = '';
	}

	function handleKeydown(event: KeyboardEvent) {
		if (event.key === 'Escape' && showModal) {
			event.preventDefault();
			closeModal();
		}
	}
</script>

<svelte:window on:keydown={handleKeydown} />

<svelte:head>
	<title>v2.5.0</title>
	<meta name="description" content="dotenv-diff documentation" />
</svelte:head>

<div class="space-y-6">
	<Title fullText="Release Notes - v2.5.0" />

	<p class="mt-8 mb-8 sm:mt-0">
		Released on 2026-01-24. This version adds default excluded keys and improves sveltekit framework rules.
	</p>
	<ul class="list-inside list-disc space-y-4">
		<li>Added default excluded keys to filterIgnoredKeys (e.g. NODE_ENV, VITE_MODE, etc).</li>
		<li>Added Warn if PUBLIC_ or VITE_ contains sensitive keywords in sveltekit framework rules.</li>
		<li>Changed text to 'Scanning environment variable usage against:' in scan usage header.</li>
		<li>Fixed `.env.example` creation prompt not appearing for variant `.env` files (e.g. `.env.local`).</li>
	</ul>
</div>

<BackNext backHref="/v2.4.11" backTitle="v2.4.11" nextHref={null} nextTitle="Next" />

<OpenImg open={showModal} onClose={closeModal} imgSrc={currentImageSrc} />
