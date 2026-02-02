<script lang="ts">
	import Title from '$components/Title.svelte';
	import BackNext from '$components/BackNext.svelte';
	import CodeBlock from '$components/CodeBlock.svelte';
</script>

<svelte:head>
	<title>dotenv-diff - Configuration File</title>
	<meta
		name="description"
		content="Full reference for dotenv-diff.config.json configuration file. All CLI flags can also be set here."
	/>
</svelte:head>

<div class="space-y-6">
	<Title fullText="Configuration File" />

	<p class="my-4">
		dotenv-diff supports a configuration file named dotenv-diff.config.json that allows you to
		persist your preferred flags. This makes it easier to share consistent settings between local
		development, teams, and CI/CD environments.
	</p>

	<section>
		<h2 class="mb-3 text-xl">File Location</h2>
		<p>
			By default, dotenv-diff automatically looks for a dotenv-diff.config.json file in your project
			root (same folder as package.json).
		</p>
		<p class="my-2">
			You can quickly create one with the <code>--init</code> flag:
		</p>
		<CodeBlock label="Terminal" command="dotenv-diff --init" />
	</section>

	<section>
		<h2 class="mb-3 text-xl">Example Configuration</h2>

		<CodeBlock
			label="dotenv-diff.config.json"
			command={`
{
  "strict": false,
  "example": ".env.example",
  "ignore": [
    "NODE_ENV",
    "VITE_MODE"
  ],
  "ignoreUrls": [
    "https://example.com"
  ]
}`}
		/>

		<p class="my-3">
			This configuration defines default behavior across comparisons, scanning, and output. Every
			field corresponds to an equivalent CLI flag — meaning you can use dotenv-diff entirely from
			configuration without passing command line options.
		</p>
	</section>

	<p>
		For a more detailed explanation and all options, see the
		<a
			href="https://github.com/Chrilleweb/dotenv-diff/blob/main/docs/configuration_and_flags.md"
			class="text-blue-700 underline"
		>
			configuration and flags documentation on GitHub
		</a>.
	</p>

	<section>
		<h2 class="mb-3 text-xl">Behavior Notes</h2>
		<ul class="list-inside list-disc space-y-2">
			<li>All options are optional; dotenv-diff uses sensible defaults when omitted.</li>
			<li>CLI flags always take precedence over configuration values.</li>
			<li>The file must be valid JSON</li>
		</ul>
	</section>
</div>

<BackNext
	backHref="/installation"
	backTitle="Installation"
	nextHref="/hooks-ci"
	nextTitle="Git Hooks and CI/CD"
/>
