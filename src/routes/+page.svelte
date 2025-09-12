<script lang="ts">
	import Title from '../components/Title.svelte';
	import BackNext from '../components/BackNext.svelte';
	import DemoModal from '../components/modals/OpenGif.svelte';
	let showModal = false;
	function openModal() {
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

<div class="space-y-4">
	<div class="items-center gap-8">
		<div class="mb-8 flex-1">
			<Title />
			<p class="mb-8">
				Scan your entire codebase to detect every environment variable reference and compares it
				against your .env files. This makes it easy to spot unused, missing, and duplicate
				variables, and even keep your codebase safe from accidental commits of secrets.
			</p>
		</div>
		<div class="flex-shrink-0">
			<button
				type="button"
				class="w-full cursor-pointer rounded-md border-0 bg-transparent p-0 transition-opacity hover:opacity-90 lg:w-1/3"
				on:click={openModal}
				aria-label="Click to view demo in full size"
				style="max-width: 32rem;"
			>
				<img
					src="/demo.gif"
					alt="Demo of dotenv-diff"
					class="h-auto w-full max-w-lg rounded-md border object-contain"
					draggable="false"
				/>
			</button>
			<p class="mt-8">
				Optimized for SvelteKit. Also works well in modern JavaScript/TypeScript projects and
				frameworks like Node.js, Next.js, Nuxt, and Vue — or any other setup where you want reliable
				.env file comparison.
			</p>
		</div>
	</div>
</div>

<BackNext backHref={null} nextHref="/installation" nextTitle="Installation" />

<DemoModal open={showModal} onClose={closeModal} />
