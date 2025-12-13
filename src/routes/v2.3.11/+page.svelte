<script lang="ts">
	import Title from '$components/Title.svelte';
	import BackNext from '$components/BackNext.svelte';
</script>

<svelte:head>
	<title>v2.3.11</title>
	<meta name="description" content="dotenv-diff documentation" />
</svelte:head>

<div class="space-y-6">
	<Title fullText="Release Notes - v2.3.11" />

	<p class="mt-8 mb-8 sm:mt-0">
		Released on 2025-12-13. This version removes low severity secrets from the codebase scanner results
		to reduce noise.
	</p>
	<ul class="list-inside list-disc space-y-4">
		<li>Removed low severity secrets from codebase scanner results, because it made too much noise.</li>
	</ul>
</div>

<BackNext backHref="/v2.3.10" backTitle="v2.3.10" nextHref={null} nextTitle="Next" />