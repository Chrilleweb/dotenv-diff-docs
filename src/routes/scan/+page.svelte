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
	<title>dotenv-diff - Scan Usage</title>
	<meta
		name="description"
		content="Scan your codebase with dotenv-diff to detect missing, unused, and duplicate environment variables."
	/>
</svelte:head>

<div class="space-y-4">
	<Title fullText="Scan Usage" />

	<p>
		By default, running dotenv-diff will scan your entire codebase to detect every environment
		variable reference. It wil automatically compare against your .env file.
	</p>

	<p>
		If you dont have a .env file, dotenv-diff will just scan your codebase without any reference.
	</p>

	<ClickableImage
		src="/scan-noenv.png"
		alt="Scan report showing missing keys"
		onClick={() => openModal('/scan-noenv.png')}
	/>

	<p>
		If you have a .env file, dotenv-diff will show a clear report directly in your terminal. Here
		are some examples:
	</p>

	<p>Find missing environment variables in your .env file, that are used in codebase</p>
	<ClickableImage
		src="/scan-missing.png"
		alt="Scan report showing missing keys"
		onClick={() => openModal('/scan-missing.png')}
	/>

	<p>Find unused environment variables in your .env file, that are not used in codebase</p>
	<ClickableImage
		src="/scan-unused.png"
		alt="Scan report showing unused keys"
		onClick={() => openModal('/scan-unused.png')}
	/>

	<p>Find duplicate keys in your .env file</p>
	<ClickableImage
		src="/scan-duplicates.png"
		alt="Scan report showing duplicate keys"
		onClick={() => openModal('/scan-duplicates.png')}
	/>

	<p>Detect potential secrets in your .env file</p>
	<ClickableImage
		src="/scan-secrets.png"
		alt="Scan report showing potential secrets"
		onClick={() => openModal('/scan-secrets.png')}
	/>

	<p>This helps keep your environment clean and production-ready, without guesswork.</p>
</div>

<BackNext backHref="/installation" nextHref="/flags" nextTitle="Flags" />

<OpenImg open={showModal} onClose={closeModal} imgSrc={currentImageSrc} />
