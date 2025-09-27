<script lang="ts">
	import Title from '$components/Title.svelte';
	import BackNext from '$components/BackNext.svelte';
</script>

<svelte:head>
	<title>v2.2.6</title>
	<meta name="description" content="dotenv-diff documentation" />
</svelte:head>

<div class="space-y-6">
	<Title fullText="Release Notes - v2.2.6" />

	<p class="mt-8 mb-8 sm:mt-0">
		Released on 2025-09-27. This version focuses on fixing more false warnings on potential secrets
		and improving maintainability of the codebase.
	</p>
	<ul class="list-inside list-disc space-y-6">
		<li>Fix more false warning on potential secrets.</li>
		<li>Refactored codebase for improved maintainability.</li>
		<li>Added HTTP URL detected message to potential secrets.</li>
		<li>
			Removed "All used environment variables are defined in .env" when there are no used variables
			found.
		</li>
	</ul>
</div>

<BackNext backHref="/v2.2.5" nextHref={null} nextTitle="Next" />
