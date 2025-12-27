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
	<title>v2.4.3</title>
	<meta name="description" content="dotenv-diff documentation" />
</svelte:head>

<div class="space-y-6">
	<Title fullText="Release Notes - v2.4.3" />

	<p class="mt-8 mb-8 sm:mt-0">
		Released on 2025-12-27. This version removes T3-env specific warnings and related code from the codebase scanner.
	</p>
	<ul class="list-inside list-disc space-y-4">
		<li>Removed T3-env specific warnings and related code from the codebase scanner.</li>
	</ul>
	<p>T3-env integration has been completely removed in this release, because it was causing more confusion than value for most users.</p>
</div>

<BackNext backHref="/v2.4.2" backTitle="v2.4.2" nextHref={null} nextTitle="Next" />

<OpenImg open={showModal} onClose={closeModal} imgSrc={currentImageSrc} />
