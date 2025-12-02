<script lang="ts">
	import Title from '$components/Title.svelte';
	import BackNext from '$components/BackNext.svelte';
</script>

<svelte:head>
	<title>v2.3.6</title>
	<meta name="description" content="dotenv-diff documentation" />
</svelte:head>

<div class="space-y-6">
	<Title fullText="Release Notes - v2.3.6" />

	<p class="mt-8 mb-8 sm:mt-0">
		Released on 2025-12-02. This version adds Next.js specific warnings to the framework validator.
	</p>
	<ul class="list-inside list-disc space-y-4">
		<li>Added Next.js specific warnings to framework validator.</li>
		<li>Added strict mode handling for framework specific warnings.</li>
	</ul>
</div>

<BackNext backHref="/v2.3.0" backTitle="v2.3.0" nextHref="/v2.3.2" nextTitle="v2.3.2" />
