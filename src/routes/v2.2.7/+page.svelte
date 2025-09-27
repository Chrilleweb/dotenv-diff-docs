<script lang="ts">
	import Title from '$components/Title.svelte';
	import BackNext from '$components/BackNext.svelte';
</script>

<svelte:head>
	<title>v2.2.7</title>
	<meta name="description" content="dotenv-diff documentation" />
</svelte:head>

<div class="space-y-6">
	<Title fullText="Release Notes - v2.2.7" />

	<p class="mt-8 mb-8 sm:mt-0">
		Released on 2025-09-27. This version focuses on updating dependencies and fixing minor issues.
	</p>
	<ul class="list-inside list-disc space-y-6">
		<li>Updated dependencies for <strong>Chalk</strong> and <strong>Commander</strong>.</li>
		<li>Fixed --strict error output to console when no warnings are found.</li>
	</ul>
</div>

<BackNext backHref="/v2.2.6" nextHref={null} nextTitle="Next" />
