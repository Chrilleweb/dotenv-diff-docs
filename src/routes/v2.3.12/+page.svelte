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
	<title>v2.3.12</title>
	<meta name="description" content="dotenv-diff documentation" />
</svelte:head>

<div class="space-y-6">
	<Title fullText="Release Notes - v2.3.12" />

	<p class="mt-8 mb-8 sm:mt-0">
		Released on 2025-12-18. This version adds warnings count to scan usage stats and various improvements to reduce noise in the output.
	</p>
	<ul class="list-inside list-disc space-y-4">
		<li>Added warnings count to scan usage stats.</li>
		<li>Moved healthScore further down on the console output for better visibility of issues.</li>
		<li>Removed used variables output from scan usage to reduce noise.</li>
		<li>Removed header output from scan usage to reduce noise.</li>
		<li>Shortened config file path in CLI output to show only the filename.</li>
		<ClickableImage
			src="/demo3.png"
			alt="Warnings count in scan usage stats"
			onClick={() => openModal('/demo3.png')}
		/>
		<li>Fixed print fix bug.</li>
		<li>Updated dependencies to latest versions.</li>
		<li>Updated README documentation for better clarity.</li>
	</ul>
</div>

<BackNext backHref="/v2.3.11" backTitle="v2.3.11" nextHref={null} nextTitle="Next" />

<OpenImg open={showModal} onClose={closeModal} imgSrc={currentImageSrc} />
