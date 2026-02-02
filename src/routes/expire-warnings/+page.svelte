<script lang="ts">
	import Title from '$components/Title.svelte';
	import BackNext from '$components/BackNext.svelte';
	import CodeBlock from '$components/CodeBlock.svelte';
</script>

<svelte:head>
	<title>dotenv-diff - Expiration Warnings</title>
	<meta
		name="description"
		content="Learn how dotenv-diff detects and warns about expiring environment variables using @expire comments."
	/>
</svelte:head>

<div class="space-y-6">
	<Title fullText="Expiration Warnings" />

	<p class="mb-8 sm:mt-0">
		Expiration warnings help you track time-limited environment variables such as temporary API
		keys, tokens, or credentials. By annotating variables with an expiration date, dotenv-diff can
		warn you before credentials expire — or fail your pipeline when they already have.
	</p>

	<section>
		<h2 class="mb-3 text-xl">Syntax</h2>

		<p class="my-2">
			Add an @expire comment directly above the environment variable you want to
			track.
		</p>

		<CodeBlock
			label=".env"
			command={`# @expire 2025-12-31 (@ is optional)
TEMP_API_TOKEN=abc123`}
		/>
	</section>

	<section>
		<h2 class="mb-3 text-xl">Strict Mode Integration</h2>

		<p class="my-2">
			When running in <code>--strict</code> mode, expiration warnings are treated as errors.
		</p>

		<p class="my-2">Expired or soon-expiring variables cause the process to fail.</p>

		<CodeBlock
			label="CLI"
			command={`dotenv-diff --strict`}
		/>
	</section>

	<section>
		<h2 class="mb-3 text-xl">Configuration</h2>

		<p class="my-2">
			Expiration warnings are enabled by default. You can disable them using a CLI flag or the
			configuration file.
		</p>

		<CodeBlock
			label="CLI"
			command={`dotenv-diff --no-expire-warnings`}
		/>
        Or in dotenv-diff.config.json:
		<CodeBlock
			label="dotenv-diff.config.json"
			command={`{
  "expireWarnings": false
}`}
		/>
	</section>

	<section>
		<h2 class="mb-3 text-xl">Why Use Expiration Warnings</h2>

		<ul class="list-inside list-disc space-y-2">
			<li>Prevent production failures caused by expired credentials.</li>
			<li>Encourage regular API key and token rotation.</li>
			<li>Document credential lifetimes directly in your environment files.</li>
			<li>Improve security hygiene in CI/CD pipelines.</li>
		</ul>
	</section>

	<section>
		<h2 class="mb-3 text-xl">Best Practices</h2>

		<ul class="list-inside list-disc space-y-2">
			<li>Always use the <code>YYYY-MM-DD</code> date format.</li>
			<li>Add comments explaining why a variable has an expiration date.</li>
		</ul>
	</section>
</div>

<BackNext backHref="/ignore-comments" backTitle="Ignoring Comments" nextHref="/monorepo" nextTitle="Monorepos" />
