<script lang="ts">
	import Title from '$components/Title.svelte';
	import BackNext from '$components/BackNext.svelte';
	import CodeBlock from '$components/CodeBlock.svelte';
</script>

<svelte:head>
	<title>dotenv-diff - Ignoring Lines</title>
	<meta
		name="description"
		content="Learn how to ignore specific lines or sections from secret detection using dotenv-diff-ignore comments."
	/>
</svelte:head>

<div class="space-y-6">
	<Title fullText="Ignoring Lines and Sections" />

	<p class="mt-8 mb-8 sm:mt-0">
		dotenv-diff can skip certain lines or code sections from being flagged during scanning. This is
		helpful when you know a specific warning is safe in your source code.
	</p>

	<section>
		<h2 class="mb-3 text-xl">Ignore a Single Line</h2>
		<CodeBlock
			label="example.ts"
			command={`const apiKey = 'safe_secret_123123123'; // dotenv-diff-ignore`}
		/>

		<p class="my-2">
			This will suppress potential secret warnings for the hardcoded URL but still allow dotenv-diff
			to report other issues (like missing variables) elsewhere.
		</p>
	</section>

	<section>
		<h2 class="mb-3 text-xl">HTML</h2>
		<CodeBlock
			label="index.html"
			command={`<a href="https://safe.example.com">Link</a> <!-- dotenv-diff-ignore -->`}
		/>
	</section>

	<section>
		<h2 class="mb-3 text-xl">Or tsx/jsx Files</h2>
		<CodeBlock
			label="index.html"
			command={`<p>Database: {process.env.DATABASE_URL}</p> {/* <!-- dotenv-diff-ignore --> */}`}
		/>
	</section>

	<section>
		<h2 class="mb-3 text-xl">Ignore Entire Sections</h2>

		<CodeBlock
			label="template.html"
			command={`// dotenv-diff-ignore-start
const skKey = 'sk_test_1234567890abcdef';
const testKey = process.env.TEST_API_KEY;
// dotenv-diff-ignore-end`}
		/>
		Or
		<CodeBlock
			label="template.html"
			command={`<!-- dotenv-diff-ignore-start -->
<p>Hardcoded data, images or links that are safe to ignore</p>
<img src="https://cdn.safe-service.com/image.png" />
<!-- dotenv-diff-ignore-end -->`}
		/>

		<p class="my-2">
			All lines between <code>&lt;!-- dotenv-diff-ignore-start --&gt;</code> and
			<code>&lt;!-- dotenv-diff-ignore-end --&gt;</code> are ignored.
		</p>
	</section>

	<section>
		<h2 class="mb-3 text-xl">Alternative Configuration</h2>
		<p class="my-2">
			If you need to ignore entire files, folders, or key patterns globally, consider using
			configuration options instead:
		</p>
		<ul>
			<li>--exclude-files - File patterns to exclude from scanning.</li>
			<li>--ignore - List of keys to ignore during comparison or scanning.</li>
			<li>--ignore-regex - Regex patterns to skip matching keys.</li>
		</ul>
		<p class="my-2">
			For full list of supported options and examples, see the <a
				href="https://github.com/Chrilleweb/dotenv-diff/blob/main/docs/configuration_and_flags.md"
				class="text-blue-700 underline"
			>
				configuration and flags documentation on GitHub
			</a>.
		</p>
	</section>
</div>

<BackNext
	backHref="/nextjs"
	backTitle="Next.js"
	nextHref="/expire-warnings"
	nextTitle="Expiration Warnings"
/>
