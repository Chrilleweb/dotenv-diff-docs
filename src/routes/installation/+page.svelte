<script lang="ts">
	import Title from '$components/Title.svelte';
	import BackNext from '$components/BackNext.svelte';

	let copied = false;

	const commands = `# npm
npm install dotenv-diff

# pnpm
pnpm add dotenv-diff

# yarn
yarn add dotenv-diff`;

	async function copyToClipboard() {
		await navigator.clipboard.writeText(commands);
		copied = true;
		setTimeout(() => (copied = false), 2000);
	}
</script>

<svelte:head>
	<title>dotenv-diff</title>
	<meta name="description" content="dotenv-diff documentation" />
</svelte:head>

<div class="space-y-4">
	<div class="items-center gap-8">
		<div class="mb-8 flex-1">
			<Title fullText="Installation" />
			<div class="relative overflow-hidden rounded-lg border border-gray-700 bg-[#1e1e1e]">
				<button
					class="absolute top-2 right-2 rounded-md bg-gray-800 px-3 py-1 text-xs font-medium text-gray-200 transition hover:bg-gray-700"
					on:click={copyToClipboard}
					aria-label="Copy to clipboard"
				>
					{#if copied}
						✅ Copied
					{:else}
						Copy
					{/if}
				</button>
				<pre class="p-4 font-mono text-sm leading-relaxed text-gray-100">
<code>{commands}</code>
    </pre>
			</div>
		</div>
		<div class="flex-shrink-0">
			<p class="mt-8">
				Optimized for SvelteKit. Also works well in modern JavaScript/TypeScript projects and
				frameworks like Node.js, Next.js, Nuxt, and Vue — or any other setup where you want reliable
				.env file comparison.
			</p>
		</div>
	</div>
</div>

<BackNext backHref={null} nextHref="/installation" nextTitle="Installation" />
