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
	<title>v2.3.5</title>
	<meta name="description" content="dotenv-diff documentation" />
</svelte:head>

<div class="space-y-6">
	<Title fullText="Release Notes - v2.3.5" />

	<p class="mt-8 mb-8 sm:mt-0">
		Released on 2025-12-01. This version adds warnings for potential secrets in .env.example files and
		more SvelteKit specific warnings.
	</p>
	<ul class="list-inside list-disc space-y-4">
		<li>Added warning for potential secrets in .env.example file.</li>
		<ClickableImage
			src="/potential-example.png"
			alt="Scan report showing potential secrets"
			onClick={() => openModal('/potential-example.png')}
		/>
		<li>Added more sveltekit specific warnings to codebase scanner</li>
		<ClickableImage
			src="/sveltekit-warning.png"
			alt="Scan report showing SvelteKit specific warning"
			onClick={() => openModal('/sveltekit-warning.png')}
		/>
		<li>Updated dependencies to latest versions.</li>
		<li>Improved README documentation for clarity.</li>
	</ul>
</div>

<BackNext backHref="/v2.3.4" backTitle="v2.3.4" nextHref="/v2.3.6" nextTitle="v2.3.6" />

<OpenImg open={showModal} onClose={closeModal} imgSrc={currentImageSrc} />
