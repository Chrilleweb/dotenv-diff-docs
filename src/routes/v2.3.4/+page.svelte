<script lang="ts">
	import Title from '$components/Title.svelte';
	import BackNext from '$components/BackNext.svelte';
</script>

<svelte:head>
	<title>v2.3.4</title>
	<meta name="description" content="dotenv-diff documentation" />
</svelte:head>

<div class="space-y-6">
	<Title fullText="Release Notes - v2.3.4" />

	<p class="mt-8 mb-8 sm:mt-0">
		Released on 2025-11-30. This version introduces Content-Security-Policy (CSP) detection.
	</p>
	<ul class="list-inside list-disc space-y-4">
		<li>Added Content-Security-Policy (CSP) detection to codebase scanner.</li>
		<li>Warns if no CSP is found in HTML/JS/TS files.</li>
	</ul>
</div>

<BackNext backHref="/v2.3.2" backTitle="v2.3.2" nextHref={null} nextTitle="Next" />
