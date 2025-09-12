<script lang="ts">
	import Title from '../components/Title.svelte';
	import BackNext from '../components/BackNext.svelte';

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
				class="lg:w-1/3 w-full cursor-pointer rounded-md border-0 bg-transparent p-0 transition-opacity hover:opacity-90"
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

{#if showModal}
	<div
		class="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4"
		on:click={closeModal}
		on:keydown={handleKeydown}
		role="dialog"
		aria-modal="true"
		tabindex="0"
	>
		<div class="relative max-h-full max-w-5xl">
			<button
				class="absolute -top-12 right-0 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-white/10 text-xl text-white transition-colors hover:text-gray-300"
				on:click={closeModal}
				aria-label="Close modal"
			>
				✕
			</button>
			<img
				src="/demo.gif"
				alt="Demo of dotenv-diff - Full size"
				class="max-h-full max-w-full rounded-lg object-contain"
			/>
		</div>
	</div>
{/if}
