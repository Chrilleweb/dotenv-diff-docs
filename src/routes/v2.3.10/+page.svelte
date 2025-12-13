<script lang="ts">
	import Title from '$components/Title.svelte';
	import BackNext from '$components/BackNext.svelte';
	import OpenImg from '$components/modals/OpenGif.svelte';
	import ClickableImage from '$components/ClickableImage.svelte';
	import CodeBlock from '$components/CodeBlock.svelte';

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
	<title>v2.3.10</title>
	<meta name="description" content="dotenv-diff documentation" />
</svelte:head>

<div class="space-y-6">
	<Title fullText="Release Notes - v2.3.10" />

	<p class="mt-8 mb-8 sm:mt-0">
		Released on 2025-12-11. This version includes improved code documentation with additional jsDocs and
		integration with t3-env for validating environment variable usage against the T3 stack schema
	</p>
	<ul class="list-inside list-disc space-y-4">
		<li>More jsDocs for better code documentation.</li>
		<li>t3-env integration to validate environment variable usage against T3 stack schema.</li>
		<ClickableImage
			src="/t3-env.png"
			alt="t3-env integration in scan report"
			onClick={() => openModal('/t3-env.png')}
		/>
		<li>Removed unused code for old --no-compare option.</li>
	</ul>
</div>

<BackNext backHref="/v2.3.9" backTitle="v2.3.9" nextHref="/v2.3.11" nextTitle="2.3.11" />

<OpenImg open={showModal} onClose={closeModal} imgSrc={currentImageSrc} />
