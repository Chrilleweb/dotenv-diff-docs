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
	<title>v2.3.8</title>
	<meta name="description" content="dotenv-diff documentation" />
</svelte:head>

<div class="space-y-6">
	<Title fullText="Release Notes - v2.3.8" />

	<p class="mt-8 mb-8 sm:mt-0">
		Released on 2025-12-08. This version adds warnings for environment variables not using uppercase letters
		in the codebase scanner, along with a new health score feature and various fixes and improvements
	</p>
	<ul class="list-inside list-disc space-y-4">
		<li>Added env variables not using uppercase warning to codebase scanner.</li>
		<ClickableImage
			src="/uppercase-warning.png"
			alt="Env variables not using uppercase warning in scan report"
			onClick={() => openModal('/uppercase-warning.png')}
		/>
		<li>Added health score feature to codebase scanner.</li>
		<ClickableImage
			src="/health-score.png"
			alt="Health score in scan report"
			onClick={() => openModal('/health-score.png')}
		/>
		<li>Removed --no-compare option from CLI and config file, because it was deprecated.</li>
		<li>Fixed issue where show-stats and show-unused options were not working as expected in config file.</li>
		<li>Updated dependencies to latest versions.</li>
	</ul>
</div>

<BackNext backHref="/v2.3.7" backTitle="v2.3.7" nextHref="/v2.3.9" nextTitle="v2.3.9" />

<OpenImg open={showModal} onClose={closeModal} imgSrc={currentImageSrc} />
