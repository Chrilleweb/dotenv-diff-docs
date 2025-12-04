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
	<title>v2.3.7</title>
	<meta name="description" content="dotenv-diff documentation" />
</svelte:head>

<div class="space-y-6">
	<Title fullText="Release Notes - v2.3.7" />

	<p class="mt-8 mb-8 sm:mt-0">
		Released on 2025-12-04. This version adds warnings for environment variables logged to console
		in the codebase scanner along with new UI improvements, jsDoc updates, and type safety improvements.
	</p>
	<ul class="list-inside list-disc space-y-4">
		<li>Added warning for environment variables logged to console in codebase scanner.</li>
		<ClickableImage
			src="/consoleLogWarning.png"
			alt="Console log warning in scan report"
			onClick={() => openModal('/consoleLogWarning.png')}
		/>
		<li>New ui for missing environment variables in codebase scanner.</li>
		<ClickableImage
			src="/missing-env.png"
			alt="New UI for missing environment variables"
			onClick={() => openModal('/missing-env.png')}
		/>
		<li>New ui for potential secrets in codebase scanner.</li>
		<ClickableImage
			src="/scan-potential-secrets.png"
			alt="New UI for missing environment variables"
			onClick={() => openModal('/scan-potential-secrets.png')}
		/>
		<li>Updated dependencies to latest versions.</li>
		<li>Updated jsDocs for better code documentation.</li>
		<li>Updated some functions for better type safety.</li>
		<li>Improved README documentation for clarity.</li>
	</ul>
</div>

<BackNext backHref="/v2.3.6" backTitle="v2.3.6" nextHref={null} nextTitle="Next" />

<OpenImg open={showModal} onClose={closeModal} imgSrc={currentImageSrc} />
