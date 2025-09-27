<script lang="ts">
	import Title from '$components/Title.svelte';
	import BackNext from '$components/BackNext.svelte';
</script>

<svelte:head>
	<title>v2.2.5</title>
	<meta name="description" content="dotenv-diff documentation" />
</svelte:head>

<div class="space-y-6">
	<Title fullText="Release Notes - v2.2.5" />

	<p class="mt-8 mb-8 sm:mt-0">
		Released on 2025-09-18. This version focuses a bug where an svg file would give a false warning
	</p>
	<ul class="list-inside list-disc space-y-6">
		<li>Corrected a bug where svg files were incorrectly flagged as potential secrets.</li>
		<li>Minor README update</li>
	</ul>
</div>

<BackNext backHref="/v2.2.4" nextHref="/v2.2.6" nextTitle="v2.2.6" />
