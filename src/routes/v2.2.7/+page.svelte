<script lang="ts">
	import Title from '$components/Title.svelte';
	import BackNext from '$components/BackNext.svelte';
	import CodeBlock from '$components/CodeBlock.svelte';
</script>

<svelte:head>
	<title>v2.2.7</title>
	<meta name="description" content="dotenv-diff documentation" />
</svelte:head>

<div class="space-y-6">
	<Title fullText="Release Notes - v2.2.7" />

	<p class="mt-8 mb-8 sm:mt-0">
		Released on 2025-09-28. This version focuses on updating dependencies, adding the ability to
		ignore specific lines using the // dotenv-diff-ignore comment and adding warnings when .env is not
		ignored by .gitignore.
	</p>
	<ul class="list-inside list-disc space-y-6">
		<li>Updated dependencies for <strong>Chalk</strong> and <strong>Commander</strong>.</li>
		<li>Fixed --strict error output to console when no warnings are found.</li>
		<li>Added warning on .env not ignored by .gitignore on default.</li>
		<li>Added // dotenv-diff-ignore comments for ignoring specific warnings on individual lines:</li>
		<CodeBlock label="example.ts" command="const hardcodedURL = 'https://thisShouldBeIgnored.com'; // dotenv-diff-ignore" />
		<p>
			Note: This will only ignore potential secrets warnings for the specific line it is added to.
			Other errors on the same line will still be reported:
		</p>
		<CodeBlock
			label="example.ts"
			command="const api = process.env.API_URL || 'https://api.dotenv-diff.com'; // dotenv-diff-ignore"
		/>
		<p>
			In the above example, only the potential secret warning for the hardcoded URL will be
			ignored. The missing variable warning for API_URL will still be reported if it is
			not defined in .env.
		</p>
	</ul>
</div>

<BackNext backHref="/v2.2.6" nextHref={null} nextTitle="Next" />
