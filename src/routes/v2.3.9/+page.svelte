<script lang="ts">
	import Title from '$components/Title.svelte';
	import BackNext from '$components/BackNext.svelte';
	import OpenImg from '$components/modals/OpenGif.svelte';
	import ClickableImage from '$components/ClickableImage.svelte';
	import CodeBlock from '$components/CodeBlock.svelte';

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
	<title>v2.3.9</title>
	<meta name="description" content="dotenv-diff documentation" />
</svelte:head>

<div class="space-y-6">
	<Title fullText="Release Notes - v2.3.9" />

	<p class="mt-8 mb-8 sm:mt-0">
		Released on 2025-12-09. This version adds expiration date and inconsistent naming warnings for
		environment variables in the codebase scanner, along with adjustments to the health score
		calculation.
	</p>
	<ul class="list-inside list-disc space-y-4">
		<li>Added expiration date warnings for environment variables in codebase scanner.</li>
		<CodeBlock
			label="Terminal"
			command="# @expires: 2024-12-31
API_KEY=

# @expires: 2025-12-11
DATABASE_URL=

# @expires: 2025-12-31
SECRET_KEY="
		/>
		<ClickableImage
			src="/expire-warning.png"
			alt="Expiration date warning in scan report"
			onClick={() => openModal('/expire-warning.png')}
		/>
		<li>Added inconsistent naming warnings for environment variables in codebase scanner.</li>
		<ClickableImage
			src="/inconsistent-naming.png"
			alt="Inconsistent naming warning in scan report"
			onClick={() => openModal('/inconsistent-naming.png')}
		/>
		<li>Changed health score calculation weights for better accuracy.</li>
		<li>
			Removed CSP detection from codebase scanner, as it was causing false positives in some cases
			for backend frameworks.
		</li>
	</ul>
</div>

<BackNext backHref="/v2.3.8" backTitle="v2.3.8" nextHref="/v2.3.10" nextTitle="v2.3.10" />

<OpenImg open={showModal} onClose={closeModal} imgSrc={currentImageSrc} />
