<script lang="ts">
	export let backHref: string | null = null; // null = disabled
	export let backTitle: string = 'Back';
	export let nextHref: string | null = null; // null = disabled
	export let nextTitle: string | null = null; // null = disabled
</script>

<div class="mt-12 flex justify-between">
	<!-- Back button -->
	{#if backHref}
		<a
			href={backHref}
			class="rounded-md border border-gray-300 px-4 py-2 text-gray-700 transition hover:bg-gray-100"
		>
			← {backTitle}
		</a>
	{:else}
		<span
			class="cursor-not-allowed rounded-md border border-gray-200 px-4 py-2 text-gray-400 select-none"
		>
			← Back
		</span>
	{/if}

	<!-- Next button -->
	{#if nextHref}
		<a
			href={nextHref}
			class="rounded-md bg-navbar-color px-4 py-2 text-white transition hover:underline"
		>
			{nextTitle} →
		</a>
	{:else}
		<span
			class="cursor-not-allowed rounded-md border border-gray-200 px-4 py-2 text-gray-400 select-none"
		>
			Next →
		</span>
	{/if}
</div>
