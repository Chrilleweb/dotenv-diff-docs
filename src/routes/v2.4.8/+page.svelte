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
	<title>v2.4.8</title>
	<meta name="description" content="dotenv-diff documentation" />
</svelte:head>

<div class="space-y-6">
	<Title fullText="Release Notes - v2.4.8" />

	<p class="mt-8 mb-8 sm:mt-0">
		Released on 2026-01-13. This version adds duplicated warnings to decrease health score and fixes several issues with framework rules and secret detection.
	</p>
	<ul class="list-inside list-disc space-y-4">
		<li>Added duplicated warnings to decrease health score.</li>
		<li>Fixed rules for sveltekit framework to correctly identify environment variable usage in $env/static/private and $env/dynamic/private imports.</li>
		<li>Fixed secret detection to ignore environment variable usage in HTML tag content.</li>
		<li>Fixed duplicate warnings on nextjs framework rules and logged env vars in console warnings.</li>
		<li>Fixed nextjs framework rules to follow the documentation more closely.</li>
	</ul>
</div>

<BackNext backHref="/v2.4.7" backTitle="v2.4.7" nextHref={null} nextTitle="Next" />

<OpenImg open={showModal} onClose={closeModal} imgSrc={currentImageSrc} />
