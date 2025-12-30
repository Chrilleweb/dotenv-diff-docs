<script lang="ts">
	import Title from '$components/Title.svelte';
	import BackNext from '$components/BackNext.svelte';
	import CodeBlock from '$components/CodeBlock.svelte';
</script>

<svelte:head>
	<title>dotenv-diff - Git Hooks & CI/CD</title>
	<meta
		name="description"
		content="Learn how to run dotenv-diff automatically using pre-commit hooks or GitHub Actions."
	/>
</svelte:head>

<div class="space-y-6">
	<Title fullText="Git Hooks and CI/CD" />

	<p class="mb-8 sm:mt-0">
		dotenv-diff is a CLI-first tool and does not manage git hooks or CI workflows by itself.
		Instead, it is designed to integrate cleanly with existing tooling such as pre-commit hooks
		or GitHub Actions.
	</p>

	<section>
		<h2 class="mb-3 text-xl">Using dotenv-diff as a Pre-Commit Hook</h2>

		<p class="my-2">
			Running dotenv-diff before each commit helps catch missing or misused environment variables
			early — before they reach CI or production.
		</p>

		<p class="my-2">
			A common setup is to use <code>husky</code> together with <code>lint-staged</code>.
			This allows dotenv-diff to run automatically whenever files are committed.
		</p>
	</section>

	<section>
		<h3 class="mb-2 text-lg">Example setup with lint-staged</h3>

		<CodeBlock
			label="package.json"
			command={`{
  "lint-staged": {
    "*.{js,ts,tsx,jsx,svelte}": [
      "dotenv-diff --example .env.example --strict"
    ]
  }
}`}
		/>

		<p class="my-2">
			In this setup, dotenv-diff runs automatically during git commit.
			If issues are found, the commit is aborted.
		</p>
	</section>

	<section>
		<h2 class="mb-3 text-xl">Running dotenv-diff in GitHub Actions</h2>

		<p class="my-2">
			dotenv-diff can also be used as part of your CI pipeline to ensure environment variable
			consistency across pull requests.
		</p>

		<p class="my-2">
			This is especially useful to verify that <code>.env.example</code> stays in sync with
			actual code usage.
		</p>
	</section>

	<section>
		<h3 class="mb-2 text-lg">Example GitHub Action</h3>

		<CodeBlock
			label=".github/workflows/dotenv-diff.yml"
			command={`name: dotenv-diff

on: [pull_request]

jobs:
  env-validation:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v6
      - uses: actions/setup-node@v6
      - run: npm install
      - run: npx dotenv-diff --example .env.example --strict`}
		/>
	</section>

	<section>
		<h2 class="mb-3 text-xl">Why</h2>
		<ul class="list-inside list-disc space-y-2">
			<li>To prevent commits that introduce undocumented environment variables.</li>
			<li>To catch framework-specific env usage issues early.</li>
		</ul>
	</section>

	<section>
		<h2 class="mb-3 text-xl">Best Practices</h2>
		<ul class="list-inside list-disc space-y-2">
			<li>Use --example to specify the example environment file for validation.</li>
			<li>Combine with <code>--strict</code> in CI to fail on warnings.</li>
		</ul>
	</section>
</div>

<BackNext backHref="/ignore-comments" backTitle="Ignoring Comments" nextHref="/configuration" nextTitle="Configuration" />
