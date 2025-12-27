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
	<title>v2.4.1</title>
	<meta name="description" content="dotenv-diff documentation" />
</svelte:head>

<div class="space-y-6">
	<Title fullText="Release Notes - v2.4.1" />

	<p class="mt-8 mb-8 sm:mt-0">
		Released on 2025-12-26. This version adds Example warnings to the JSON output of scan usage, renames a statistics field, and fixes bugs in the Next.js and T3-env framework rules as well as secret detection.
	</p>
	<ul class="list-inside list-disc space-y-4">
		<li>Added Example warings to JSON output of scan usage.</li>
		<li>Changed scan statistics name from "Total usages found" to "Total variables".</li>
		<li>Fixed nextjs framework rules bug where multiple warnings could be generated for the same usage.</li>
		<li>Fixed t3-env framework rules bug where multiple warnings could be generated for the same usage.</li>
		<li>Fixed false positive secret detection for certain harmless attribute keys in codebase scanner.</li>
	</ul>
</div>

<BackNext backHref="/v2.4.0" backTitle="v2.4.0" nextHref={null} nextTitle="Next" />

<OpenImg open={showModal} onClose={closeModal} imgSrc={currentImageSrc} />
