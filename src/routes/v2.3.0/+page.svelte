<script lang="ts">
	import Title from '$components/Title.svelte';
	import BackNext from '$components/BackNext.svelte';
	import CodeBlock from '$components/CodeBlock.svelte';
</script>

<svelte:head>
	<title>v2.3.0</title>
	<meta name="description" content="dotenv-diff documentation" />
</svelte:head>

<div class="space-y-6">
	<Title fullText="Release Notes - v2.3.0" />

	<p class="mt-8 mb-8 sm:mt-0">
		Released on 2025-10-07. This version focuses on improving HTML file support, adding 
		configuration file options, and enhancing secret detection with URL ignore capabilities.
	</p>

	<ul class="list-inside list-disc space-y-4">
		<li>Fixed issue where .env.example would be ignored by git when using --fix flag.</li>
		<li>
			HTML comments to ignore secret detection in HTML lines (e.g. <code
				>&lt;!-- dotenv-diff-ignore --&gt;</code
			>).
		</li>
		<li>
			Also ignore html sections with <code>&lt;!-- dotenv-diff-ignore-start --&gt;</code> and
			<code>&lt;!-- dotenv-diff-ignore-end --&gt;</code>.
		</li>
		<li>Added option to have a dotenv-diff.config.json file for configuration.</li>
		<li>
			ignoreUrls option to ignore specific URLs in secret detection (e.g. <code
				>https://nomistake.com</code
			>).
		</li>
		<li>Added <code>--init</code> flag to create a sample config file.</li>
		<li>
			<code>--no-compare</code> flag to disable comparison mode in scan usage, and
			<code>noCompare</code> option in config file.
		</li>
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
		<p>
			The above configuration file is a sample config file that disables strict mode,
			specifies the example file as .env.example, ignores NODE_ENV and VITE_MODE variables,
			and ignores the URL https://example.com in secret detection. You can customize the
			settings as needed for your project. All flags you use in the CLI can also be set in the config file.
		</p>
	</ul>
</div>

<BackNext backHref="/v2.2.8" backTitle="v2.2.8" nextHref="/v2.3.1" nextTitle="v2.3.1" />
