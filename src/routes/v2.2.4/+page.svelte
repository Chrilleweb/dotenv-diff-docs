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
	<title>dotenv-diff</title>
	<meta name="description" content="dotenv-diff documentation" />
</svelte:head>

<div class="space-y-6">
	<Title fullText="Release Notes - v2.2.4" />

	<p class="mb-8 mt-8 sm:mt-0">
		Released on 2025-09-13. This version focuses on fixing issues with scan results and improving
		accuracy of the reported statistics. No breaking changes were introduced.
	</p>
	<ul class="list-inside list-disc space-y-6">
		<li>
			Corrected a bug where the found variable count did not display when there were
			missing variables in .env.
		</li>
		<li>
			Environment variables found in commented out code are now ignored — they no longer
			count towards “Found X unique environment variables in use”.
		</li>
		<li>
			Fixed a bug where the scanner incorrectly reported
			"no unused variables" when no variables were found at all.
		</li>
	</ul>
</div>

<BackNext backHref={null} nextHref="/installation" nextTitle="Installation" />

<OpenImg open={showModal} onClose={closeModal} imgSrc="/demo.gif" />
