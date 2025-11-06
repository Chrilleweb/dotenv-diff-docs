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
	<title>v2.3.2</title>
	<meta name="description" content="dotenv-diff documentation" />
</svelte:head>

<div class="space-y-6">
	<Title fullText="Release Notes - v2.3.2" />

	<p class="mt-8 mb-8 sm:mt-0">
		Released on 2025-11-04. This version introduces scan duration output, severity levels for secret
		findings, and various dependency updates and documentation improvements.
	</p>
	<ul class="list-inside list-disc space-y-4">
		<li>Added duration output to scan statistics.</li>
		<ClickableImage
			src="/duration.png"
			alt="Scan report showing duration output"
			onClick={() => openModal('/duration.png')}
		/>
		<li>Severity levels for secret findings: high, medium, low.</li>
		<ClickableImage
			src="/severity.png"
			alt="Scan report showing severity levels"
			onClick={() => openModal('/severity.png')}
		/>
		<li>Updated dependencies to latest versions.</li>
		<li>Improved README documentation for clarity.</li>
	</ul>
</div>

<BackNext backHref="/v2.3.1" backTitle="v2.3.1" nextHref={null} nextTitle="Next" />

<OpenImg open={showModal} onClose={closeModal} imgSrc={currentImageSrc} />
