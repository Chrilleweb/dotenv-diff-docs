<script lang="ts">
	export let label: string = 'Terminal';
	export let command: string;
	export let showHeader: boolean = true;
	export let showCopy: boolean = true;

	let copied = false;

	async function copyToClipboard() {
		await navigator.clipboard.writeText(command.trim());
		copied = true;
		setTimeout(() => (copied = false), 2000);
	}

	$: lines = command.trim().split('\n');
	$: isMultiline = lines.length > 1;
</script>

<div class="rounded-xl bg-navbar-color">
	{#if showHeader}
		<div class="flex items-center justify-between px-3 pt-2 pb-1.5 text-xs text-gray-400">
			<span>{label}</span>

			{#if showCopy}
				<button
					class="cursor-pointer flex h-7 w-16 items-center justify-center rounded-md bg-gray-500 text-xs text-gray-300 transition hover:bg-gray-700"
					on:click={copyToClipboard}
				>
					{#if copied}
						✔ Copied
					{:else}
						Copy
					{/if}
				</button>
			{/if}
		</div>
	{/if}

	<div class="px-4 pb-6 text-sm">
		{#if isMultiline}
			<pre class="overflow-x-auto"><code class="text-sky-400">{command.trim()}</code></pre>
		{:else}
			<code>
				{#if command.includes(' ')}
					<span class="text-pink-400">{command.split(' ')[0]}</span>{' '}
					<span class="text-sky-400">{command.split(' ').slice(1).join(' ')}</span>
				{:else}
					<span class="text-sky-400">{command}</span>
				{/if}
			</code>
		{/if}
	</div>
</div>
