<script lang="ts">
	import CodeBlock from '$components/CodeBlock.svelte';

	type PM = 'npm' | 'yarn' | 'pnpm';
	let active: PM = 'pnpm';

	const commands: Record<PM, string> = {
		npm: 'npm install dotenv-diff',
		yarn: 'yarn add dotenv-diff',
		pnpm: 'pnpm add dotenv-diff'
	};

	let copied = false;

	async function copy() {
		await navigator.clipboard.writeText(commands[active]);
		copied = true;
		setTimeout(() => (copied = false), 2000);
	}
</script>

<div class="rounded-xl bg-navbar-color">
	<!-- Top bar -->
	<div class="flex items-center justify-between border-b border-gray-700 px-4 py-2 text-sm">
		<div class="flex gap-4">
			{#each ['npm', 'yarn', 'pnpm'] as pm}
				<button
					class="cursor-pointer pb-1 transition
						{active === pm
							? 'border-b-2 border-sky-400 text-sky-400'
							: 'text-gray-400 hover:text-gray-200'}"
					on:click={() => (active = pm as PM)}
				>
					{pm}
				</button>
			{/each}
		</div>

		<button
			class="cursor-pointer flex h-7 w-16 items-center justify-center rounded-md bg-gray-500 text-xs text-gray-300 transition hover:bg-gray-700"
			on:click={copy}
		>
			{copied ? '✔ Copied' : 'Copy'}
		</button>
	</div>

	<!-- Code -->
	<div class="pt-4">
		<CodeBlock
			command={commands[active]}
			showHeader={false}
		/>
	</div>
</div>
