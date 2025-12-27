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
		dotenv-diff can skip certain lines or code sections from being flagged during secret detection.
		This is helpful when you know a specific URL or key is safe to include in your source code.
	</p>

	<section>
		<h2 class="mb-3 text-xl">Ignore a Single Line</h2>
		<CodeBlock
			label="example.ts"
			command={`const apiKey = 'https://safe-service.com'; // dotenv-diff-ignore`}
		/>

		<p class="my-2">
			This will suppress potential secret warnings for the hardcoded URL but still allow dotenv-diff
			to report other issues (like missing variables) elsewhere.
		</p>
	</section>

	<section>
		<h2 class="mb-3 text-xl">Ignore in HTML/ Files</h2>
		<CodeBlock
			label="index.html"
			command={`<a href="https://safe.example.com">Link</a> <!-- dotenv-diff-ignore -->`}
		/>
	</section>

	<section>
		<h2 class="mb-3 text-xl">Ignore Entire Sections</h2>
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
		<h2 class="mb-3 text-xl">When to Use</h2>
		<ul class="list-disc list-inside space-y-2">
			<li>When a hardcoded value (like a URL or test key) is intentionally safe.</li>
			<li>To prevent false positives during CI/CD scans.</li>
			<li>To skip irrelevant HTML or legacy code sections.</li>
		</ul>
	</section>

	<section>
		<h2 class="mb-3 text-xl">Best Practices</h2>
		<ul class="list-disc list-inside space-y-2">
			<li>Use ignore comments sparingly — prefer environment variables for real secrets.</li>
			<li>Never use it to hide actual API keys or production credentials.</li>
			<li>Combine with <code>--strict</code> to still fail on non-ignored warnings.</li>
		</ul>
	</section>
</div>

<BackNext backHref="/nextjs" backTitle="Next.js" nextHref="/v2.4.1" nextTitle="v2.4.1" />
