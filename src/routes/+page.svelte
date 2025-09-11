<script lang="ts">
	import { onMount } from 'svelte';
	import { startTypewriter } from '$lib/typeWriter';
		
	let showModal = false;
	let displayedText = '';
	const fullText = 'dotenv-diff';

	function openModal() {
		showModal = true;
	}

	function closeModal() {
		showModal = false;
	}

	function handleKeydown(event: KeyboardEvent) {
		if (event.key === 'Escape') {
			closeModal();
		}
	}

function updateDisplayedText(text: string) {
		displayedText = text;
	}
	
	onMount(() => {
		startTypewriter(fullText, updateDisplayedText);
	});
</script>

<svelte:head>
	<title>dotenv-diff</title>
	<meta name="description" content="dotenv-diff documentation" />
</svelte:head>

<div class="space-y-4">
	<div class="gap-8 items-center">
		<div class="flex-1 mb-8">
			<h1 class="mb-4 text-4xl h-[3.5rem]">{displayedText}</h1>
			<p class="mb-8">
				Scan your entire codebase to detect every environment variable reference and compares it
				against your .env files. This makes it easy to spot unused, missing, and duplicate
				variables, and even keep your codebase safe from accidental commits of secrets.
			</p>
						<p class="mb-8">
				Knowing which environment variables are <em>actually used</em> in your codebase is just as important
				as keeping your .env files consistent. Over time, projects accumulate unused keys, missing values,
				or secrets that never get cleaned up.
			</p>
			<p class="mb-8">
				Optimized for SvelteKit. Also works well in modern JavaScript/TypeScript projects and
				frameworks like Node.js, Next.js, Nuxt, and Vue — or any other setup where you want reliable
				.env file comparison.
			</p>
		</div>
		<div class="flex-shrink-0 w-1/3">
	<button
		type="button"
		class="p-0 border-0 bg-transparent rounded-md cursor-pointer hover:opacity-90 transition-opacity w-full"
		on:click={openModal}
		aria-label="Click to view demo in full size"
		style="max-width: 32rem;"
	>
		<img 
			src="/demo.gif" 
			alt="Demo of dotenv-diff" 
			class="rounded-md border max-w-lg w-full h-auto object-contain"
			draggable="false"
		/>
	</button>
		</div>
	</div>
</div>

{#if showModal}
	<div 
		class="fixed inset-0 bg-black/75 flex items-center justify-center z-50 p-4"
		on:click={closeModal}
		on:keydown={handleKeydown}
		role="dialog"
		aria-modal="true"
		tabindex="0"
	>
		<div class="relative max-w-5xl max-h-full">
			<button
				class="cursor-pointer absolute -top-12 right-0 text-white text-xl hover:text-gray-300 transition-colors bg-white/10 rounded-full w-8 h-8 flex items-center justify-center"
				on:click={closeModal}
				aria-label="Close modal"
			>
				✕
			</button>
			<img 
				src="/demo.gif" 
				alt="Demo of dotenv-diff - Full size" 
				class="rounded-lg max-w-full max-h-full object-contain"
			/>
		</div>
	</div>
{/if}
