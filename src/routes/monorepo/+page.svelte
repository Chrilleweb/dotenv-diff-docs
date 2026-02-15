<script lang="ts">
	import Title from '$components/Title.svelte';
	import BackNext from '$components/BackNext.svelte';
	import CodeBlock from '$components/CodeBlock.svelte';
</script>

<svelte:head>
	<title>dotenv-diff - Monorepo Support</title>
	<meta
		name="description"
		content="Learn how to use dotenv-diff in monorepos with shared packages and multiple applications."
	/>
</svelte:head>

<div class="space-y-6">
	<Title fullText="Monorepo Support" />

	<p class="mb-8 sm:mt-0">
		In monorepos with multiple applications and shared packages, environment variables are often
		used across folder boundaries. dotenv-diff supports this by allowing you to extend the scan
		scope to include shared folders while still running from a single app.
	</p>

	<section>
		<h2 class="mb-3 text-xl">Scanning Shared Packages</h2>

		<p class="my-2">
			By default, dotenv-diff scans the current working directory. In a monorepo, you can include
			shared packages or libraries using the <code>--include-files</code> flag.
		</p>

		<CodeBlock
			label="package.json"
			command={`{
  "scripts": {
    "dotenv-diff": "dotenv-diff --example .env.example --include-files '../../packages/**/*' --ignore VITE_MODE"
  }
}`}
		/>
	</section>

	<section>
		<h2 class="mb-3 text-xl">What This Does</h2>

		<ul class="list-inside list-disc space-y-2">
			<li>Scans the current application.</li>
			<li>Includes shared packages from the monorepo.</li>
			<li>Detects environment variable usage across app and shared code.</li>
			<li>Ignores variables used only in specific runtime environments.</li>
		</ul>
	</section>

	<section>
		<h2 class="mb-3 text-xl">Using a Configuration File</h2>

		<p class="my-2">
			For larger monorepos, it is often cleaner to move shared configuration into a
			<code>dotenv-diff.config.json</code> file.
		</p>

		<CodeBlock
			label="dotenv-diff.config.json"
			command={`{
  "example": ".env.example",
  "includeFiles": ["../../packages/**/*"],
  "ignore": ["VITE_MODE"]
}`}
		/>
	</section>

	<section>
		<h2 class="mb-3 text-xl">Why This Matters in Monorepos</h2>

		<ul class="list-inside list-disc space-y-2">
			<li>Unused or undocumented variables are harder to detect across apps.</li>
			<li>Keeping <code>.env.example</code> accurate becomes more complex at scale.</li>
		</ul>
	</section>
</div>

<BackNext backHref="/expire-warnings" backTitle="Expiration Warnings" nextHref={null} nextTitle="Next" />
