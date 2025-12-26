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
	<title>v2.4.0</title>
	<meta name="description" content="dotenv-diff documentation" />
</svelte:head>

<div class="space-y-6">
	<Title fullText="Release Notes - v2.4.0" />

	<p class="mt-8 mb-8 sm:mt-0">
		Released on 2025-12-26. This version includes various improvements to the scan usage output and fixes for t3-env and Next.js framework validators.
	</p>
	<ul class="list-inside list-disc space-y-4">
		<li>Added spacing before missing example file message in scan usage output.</li>
		<li>Changed path display for print missing example file message to show only filename instead of full path.</li>
		<li>Fixed compare mode value mismatch count not showing in stats output if --check-values flag isn't used.</li>
		<li>Fixed t3-env integration not working as expected in some edge cases.</li>
		<li>Fixed nextjs framework validator not working as expected in some edge cases.</li>
	</ul>
</div>

<BackNext backHref="/v2.3.12" backTitle="v2.3.12" nextHref={null} nextTitle="Next" />

<OpenImg open={showModal} onClose={closeModal} imgSrc={currentImageSrc} />
