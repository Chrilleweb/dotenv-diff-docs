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
	<title>v2.4.4</title>
	<meta name="description" content="dotenv-diff documentation" />
</svelte:head>

<div class="space-y-6">
	<Title fullText="Release Notes - v2.4.4" />

	<p class="mt-8 mb-8 sm:mt-0">
		Released on 2025-12-27. This version fixes a bug in the Next.js framework rules.
	</p>
	<ul class="list-inside list-disc space-y-4">
		<li>Fixed bug in next js framework rules</li>
	</ul>
	<p>We want to warn about environment variables not using 'NEXT_PUBLIC' in client-side code for Next.js projects - Fixed an issue where that warning was not being triggered correctly.</p>
</div>

<BackNext backHref="/v2.4.3" backTitle="v2.4.3" nextHref={null} nextTitle="Next" />

<OpenImg open={showModal} onClose={closeModal} imgSrc={currentImageSrc} />
