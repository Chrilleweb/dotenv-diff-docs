<script lang="ts">
	import Title from '$components/Title.svelte';
	import BackNext from '$components/BackNext.svelte';
</script>

<svelte:head>
	<title>v2.2.8</title>
	<meta name="description" content="dotenv-diff documentation" />
</svelte:head>

<div class="space-y-6">
	<Title fullText="Release Notes - v2.2.8" />

	<p class="mt-8 mb-8 sm:mt-0">
		Released on 2025-10-04. This version focuses on fixing Fix .env is not ignored by git when using
		--fix flag. and improving maintainability of the codebase.
	</p>
	<ul class="list-inside list-disc space-y-6">
		<li>Fix .env is not ignored by git when using --fix flag.</li>
		<li>Refactored codebase for improved maintainability.</li>
	</ul>
</div>

<BackNext backHref="/v2.2.5" nextHref={null} nextTitle="Next" />
