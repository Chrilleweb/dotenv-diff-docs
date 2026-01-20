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
	<title>v2.4.11</title>
	<meta name="description" content="dotenv-diff documentation" />
</svelte:head>

<div class="space-y-6">
	<Title fullText="Release Notes - v2.4.11" />

	<p class="mt-8 mb-8 sm:mt-0">
		Released on 2026-01-20. This version adds a SvelteKit framework rule.
	</p>
	<ul class="list-inside list-disc space-y-4">
		<li>Added SvelteKit framework rule (PUBLIC_ env vars cant be accessed through $env/dynamic/private).</li>
		<li>Fixed sveltekit framework rules - $env imports were not being detected correctly in some edge cases.</li>
	</ul>
</div>

<BackNext backHref="/v2.4.10" backTitle="v2.4.10" nextHref={null} nextTitle="Next" />

<OpenImg open={showModal} onClose={closeModal} imgSrc={currentImageSrc} />
