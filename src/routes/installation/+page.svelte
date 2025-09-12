<script lang="ts">
	import Title from '$components/Title.svelte';
	import BackNext from '$components/BackNext.svelte';

	let copied: string | null = null;

	const commands = {
		npm: 'npm install dotenv-diff',
		pnpm: 'pnpm add dotenv-diff',
		yarn: 'yarn add dotenv-diff'
	};

	async function copyToClipboard(cmd: string) {
		await navigator.clipboard.writeText(cmd);
		copied = cmd;
		setTimeout(() => (copied = null), 2000);
	}
</script>

<svelte:head>
	<title>dotenv-diff</title>
	<meta name="description" content="dotenv-diff documentation" />
</svelte:head>

<div class="space-y-6">
	<Title fullText="Installation" />
	{#each Object.entries(commands) as [pkgManager, cmd]}
		<div class="rounded-xl bg-navbar-color">
			<div class="flex items-center justify-between px-3 pt-2 pb-1.5 text-xs text-gray-400">
				<span class="capitalize">Terminal</span>
				<button
					class="flex h-7 w-16 cursor-pointer items-center justify-center rounded-md bg-gray-500 text-xs text-gray-300 transition hover:bg-gray-700"
					on:click={() => copyToClipboard(cmd)}
				>
					{#if copied === cmd}
						✔ Copied
					{:else}
						Copy
					{/if}
				</button>
			</div>

			<div class="px-4 pb-6 text-sm">
				<code>
					<span class="text-pink-400">{pkgManager}</span>{' '}
					<span class="text-sky-400">{cmd.split(' ').slice(1).join(' ')}</span>
				</code>
			</div>
		</div>
	{/each}
	<p class="mt-8">
  Once installed, you can immediately start scanning your codebase files for missing, unused, duplicate or detect potential secrets.
</p>
</div>

<BackNext backHref="/" nextHref="/usage" nextTitle="Usage" />
