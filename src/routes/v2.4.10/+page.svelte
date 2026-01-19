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
	<title>v2.4.10</title>
	<meta name="description" content="dotenv-diff documentation" />
</svelte:head>

<div class="space-y-6">
	<Title fullText="Release Notes - v2.4.10" />

	<p class="mt-8 mb-8 sm:mt-0">
		Released on 2026-01-19. This version improves the JSON output and fixes several issues.
	</p>
	<ul class="list-inside list-disc space-y-4">
		<li>Changed total variables to total variable references in scan statistics output.</li>
		<li>Fixed compare mode json output missing stats</li>
		<li>Fixed compare mode issue where it would warn about .env.example not being gitignored in edgde cases.</li>
		<li>Fixed create example file prompt bug.</li>
	</ul>
</div>

<BackNext backHref="/v2.4.9" backTitle="v2.4.9" nextHref={null} nextTitle="Next" />

<OpenImg open={showModal} onClose={closeModal} imgSrc={currentImageSrc} />
