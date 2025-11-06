<script lang="ts">
	import Title from '$components/Title.svelte';
	import BackNext from '$components/BackNext.svelte';
</script>

<svelte:head>
	<title>v2.3.1</title>
	<meta name="description" content="dotenv-diff documentation" />
</svelte:head>

<div class="space-y-6">
	<Title fullText="Release Notes - v2.3.1" />

	<p class="mt-8 mb-8 sm:mt-0">
		Released on 2025-10-08. This version fixes a bug where dotenv-diff.config.json was not found in
		monorepo root when running from apps.
	</p>
	<ul class="list-inside list-disc space-y-4">
		<li>Fixed dotenv-diff.config.json not found in monorepo root when running from apps.</li>
	</ul>
</div>

<BackNext backHref="/v2.3.0" backTitle="v2.3.0" nextHref="/v2.3.2" nextTitle="v2.3.2" />
