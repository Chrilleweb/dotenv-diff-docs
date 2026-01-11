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
	<title>v2.4.7</title>
	<meta name="description" content="dotenv-diff documentation" />
</svelte:head>

<div class="space-y-6">
	<Title fullText="Release Notes - v2.4.7" />

	<p class="mt-8 mb-8 sm:mt-0">
		Released on 2026-01-11. This version adds a progress bar to the codebase scanner and fixes a
		path normalization issue.
	</p>
	<ul class="list-inside list-disc space-y-4">
		<li>Added progress bar to codebase scanner.</li>
		<ClickableImage
			src="/successful-scan.png"
			alt="Warnings count in scan usage stats"
			onClick={() => openModal('/successful-scan.png')}
		/>
		<li>
			Fixed path normalization issue where file paths were not consistently displayed across
			different operating systems.
		</li>
	</ul>
</div>

<BackNext backHref="/v2.4.6" backTitle="v2.4.6" nextHref={null} nextTitle="Next" />

<OpenImg open={showModal} onClose={closeModal} imgSrc={currentImageSrc} />
