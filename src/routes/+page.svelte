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
	<Title fullText="dotenv-diff" />
	<div class="mb-4 flex space-x-4">
		<a href="https://www.npmjs.com/package/dotenv-diff" target="_blank" rel="noopener noreferrer">
			<img src="https://img.shields.io/npm/v/dotenv-diff.svg" alt="npm version" />
		</a>
		<a href="https://www.npmjs.com/package/dotenv-diff" target="_blank" rel="noopener noreferrer">
			<img src="https://img.shields.io/npm/dt/dotenv-diff.svg" alt="npm downloads" />
		</a>
	</div>

	<p class="mb-8">
		Scan your entire codebase to detect every environment variable reference and compares it against
		your .env files. It helps you catch missing, unused, duplicated, and misused variables early, before they cause
		runtime errors, security issues, or accidental client-side exposure.
	</p>
</div>
<div class="flex-shrink-0">
	<ClickableImage
		src="/demo3.gif"
		alt="Demo of dotenv-diff"
		onClick={() => openModal('/demo3.gif')}
	/>
	<p class="mt-8">
		Optimized for SvelteKit and Next.js. Also works well in modern JavaScript/TypeScript projects and frameworks
		like Node.js, Nuxt, and Vue — or any other setup where you want reliable .env file
		comparison.
	</p>
</div>

<BackNext backHref={null} nextHref="/installation" nextTitle="Installation" />

<OpenImg open={showModal} onClose={closeModal} imgSrc="/demo3.gif" />
