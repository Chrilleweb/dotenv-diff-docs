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
	<title>v2.4.5</title>
	<meta name="description" content="dotenv-diff documentation" />
</svelte:head>

<div class="space-y-6">
	<Title fullText="Release Notes - v2.4.5" />

	<p class="mt-8 mb-8 sm:mt-0">
		Released on 2025-12-29. This version improves the UI for framework warnings and updates the rules for Next.js and SvelteKit frameworks.
	</p>
	<ul class="list-inside list-disc space-y-4">
		<li>Changed UI for framework warnings to include framework name + better formatting.</li>
		<li>Updated nextjs framework rules.</li>
		<li>Updated sveltekit framework rules.</li>
	</ul>
</div>

<BackNext backHref="/v2.4.4" backTitle="v2.4.4" nextHref={null} nextTitle="Next" />

<OpenImg open={showModal} onClose={closeModal} imgSrc={currentImageSrc} />
