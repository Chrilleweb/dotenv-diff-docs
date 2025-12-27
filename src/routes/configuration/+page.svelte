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
		dotenv-diff supports a configuration file named dotenv-diff.config.json that
		allows you to persist your preferred flags.  
		This makes it easier to share consistent settings between local development, teams, and CI/CD
		environments.
	</p>

	<section>
		<h2 class="mb-3 text-xl">File Location</h2>
		<p>
			By default, dotenv-diff automatically looks for a
			dotenv-diff.config.json file in your project root (same folder as
			package.json).
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
			This configuration defines default behavior across comparisons, scanning, and output.  
			Every field corresponds to an equivalent CLI flag — meaning you can use dotenv-diff entirely
			from configuration without passing command line options.
		</p>
	</section>

	<section>
		<h2 class="mb-3 text-xl">Supported Options</h2>

		<div class="overflow-x-auto">
			<table class="min-w-full border-collapse text-sm">
				<thead>
					<tr class="border-b border-gray-800 text-left">
						<th class="py-2 px-3">Option</th>
						<th class="py-2 px-3">Type</th>
						<th class="py-2 px-3">Description</th>
						<th class="py-2 px-3">Equivalent CLI Flag</th>
					</tr>
				</thead>
				<tbody>
					<tr class="border-b border-gray-800">
						<td class="py-2 px-3"><code>checkValues</code></td>
						<td class="py-2 px-3">boolean</td>
						<td class="py-2 px-3">Compare actual values if example has values.</td>
						<td class="py-2 px-3"><code>--check-values</code></td>
					</tr>

					<tr class="border-b border-gray-800">
						<td class="py-2 px-3"><code>ci</code></td>
						<td class="py-2 px-3">boolean</td>
						<td class="py-2 px-3">Run non-interactively and never create files.</td>
						<td class="py-2 px-3"><code>--ci</code></td>
					</tr>

					<tr class="border-b border-gray-800">
						<td class="py-2 px-3"><code>yes</code></td>
						<td class="py-2 px-3">boolean</td>
						<td class="py-2 px-3">Automatically answer “Yes” to prompts.</td>
						<td class="py-2 px-3"><code>--yes</code></td>
					</tr>

					<tr class="border-b border-gray-800">
						<td class="py-2 px-3"><code>env</code></td>
						<td class="py-2 px-3">string</td>
						<td class="py-2 px-3">Path to a specific <code>.env</code> file.</td>
						<td class="py-2 px-3"><code>--env &lt;file&gt;</code></td>
					</tr>

					<tr class="border-b border-gray-800">
						<td class="py-2 px-3"><code>example</code></td>
						<td class="py-2 px-3">string</td>
						<td class="py-2 px-3">Path to your <code>.env.example</code> file.</td>
						<td class="py-2 px-3"><code>--example &lt;file&gt;</code></td>
					</tr>

					<tr class="border-b border-gray-800">
						<td class="py-2 px-3"><code>allowDuplicates</code></td>
						<td class="py-2 px-3">boolean</td>
						<td class="py-2 px-3">Do not warn about duplicate keys in .env files.</td>
						<td class="py-2 px-3"><code>--allow-duplicates</code></td>
					</tr>

					<tr class="border-b border-gray-800">
						<td class="py-2 px-3"><code>ignore</code></td>
						<td class="py-2 px-3">string[]</td>
						<td class="py-2 px-3">List of keys to ignore during comparison or scanning.</td>
						<td class="py-2 px-3"><code>--ignore</code></td>
					</tr>

					<tr class="border-b border-gray-800">
						<td class="py-2 px-3"><code>ignoreRegex</code></td>
						<td class="py-2 px-3">string[]</td>
						<td class="py-2 px-3">Regex patterns to skip matching keys.</td>
						<td class="py-2 px-3"><code>--ignore-regex</code></td>
					</tr>

					<tr class="border-b border-gray-800">
						<td class="py-2 px-3"><code>fix</code></td>
						<td class="py-2 px-3">boolean</td>
						<td class="py-2 px-3">Automatically fix issues (add missing keys, remove duplicates).</td>
						<td class="py-2 px-3"><code>--fix</code></td>
					</tr>

					<tr class="border-b border-gray-800">
						<td class="py-2 px-3"><code>json</code></td>
						<td class="py-2 px-3">boolean</td>
						<td class="py-2 px-3">Output results in JSON format.</td>
						<td class="py-2 px-3"><code>--json</code></td>
					</tr>

					<tr class="border-b border-gray-800">
						<td class="py-2 px-3"><code>noColor</code></td>
						<td class="py-2 px-3">boolean</td>
						<td class="py-2 px-3">Disable colored terminal output.</td>
						<td class="py-2 px-3"><code>--no-color</code></td>
					</tr>

					<tr class="border-b border-gray-800">
						<td class="py-2 px-3"><code>only</code></td>
						<td class="py-2 px-3">string[]</td>
						<td class="py-2 px-3">
							Only run specific categories: missing, extra, empty, mismatch, duplicate, gitignore.
						</td>
						<td class="py-2 px-3"><code>--only</code></td>
					</tr>

					<tr class="border-b border-gray-800">
						<td class="py-2 px-3"><code>scanUsage</code></td>
						<td class="py-2 px-3">boolean</td>
						<td class="py-2 px-3">Scan codebase for environment variable usage.</td>
						<td class="py-2 px-3"><code>--scan-usage</code></td>
					</tr>

					<tr class="border-b border-gray-800">
						<td class="py-2 px-3"><code>compare</code></td>
						<td class="py-2 px-3">boolean</td>
						<td class="py-2 px-3">Compare .env and .env.example files.</td>
						<td class="py-2 px-3"><code>--compare</code></td>
					</tr>

					<tr class="border-b border-gray-800">
						<td class="py-2 px-3"><code>includeFiles</code></td>
						<td class="py-2 px-3">string[]</td>
						<td class="py-2 px-3">Additional file patterns to include in scan.</td>
						<td class="py-2 px-3"><code>--include-files</code></td>
					</tr>

					<tr class="border-b border-gray-800">
						<td class="py-2 px-3"><code>files</code></td>
						<td class="py-2 px-3">string[]</td>
						<td class="py-2 px-3">Override default file patterns (replaces built-in ones).</td>
						<td class="py-2 px-3"><code>--files</code></td>
					</tr>

					<tr class="border-b border-gray-800">
						<td class="py-2 px-3"><code>excludeFiles</code></td>
						<td class="py-2 px-3">string[]</td>
						<td class="py-2 px-3">File patterns to exclude from scanning.</td>
						<td class="py-2 px-3"><code>--exclude-files</code></td>
					</tr>

					<tr class="border-b border-gray-800">
						<td class="py-2 px-3"><code>showUnused</code></td>
						<td class="py-2 px-3">boolean</td>
						<td class="py-2 px-3">Show variables defined in .env but unused in code.</td>
						<td class="py-2 px-3"><code>--no-show-unused</code></td>
					</tr>

					<tr class="border-b border-gray-800">
						<td class="py-2 px-3"><code>showStats</code></td>
						<td class="py-2 px-3">boolean</td>
						<td class="py-2 px-3">Display statistics summary at the end of scan.</td>
						<td class="py-2 px-3"><code>--no-show-stats</code></td>
					</tr>

					<tr class="border-b border-gray-800">
						<td class="py-2 px-3"><code>strict</code></td>
						<td class="py-2 px-3">boolean</td>
						<td class="py-2 px-3">Enable fail-on-warning behavior.</td>
						<td class="py-2 px-3"><code>--strict</code></td>
					</tr>

					<tr class="border-b border-gray-800">
						<td class="py-2 px-3"><code>secrets</code></td>
						<td class="py-2 px-3">boolean</td>
						<td class="py-2 px-3">Enable or disable secret detection.</td>
						<td class="py-2 px-3"><code>--no-secrets</code></td>
					</tr>

					<tr class="border-b border-gray-800">
						<td class="py-2 px-3"><code>ignoreUrls</code></td>
						<td class="py-2 px-3">string[]</td>
						<td class="py-2 px-3">URLs to skip in secret detection.</td>
						<td class="py-2 px-3"><code>--ignore-urls</code></td>
					</tr>
					
					<tr class="border-b border-gray-800">
						<td class="py-2 px-3"><code>init</code></td>
						<td class="py-2 px-3">boolean</td>
						<td class="py-2 px-3">Create a sample configuration file.</td>
						<td class="py-2 px-3"><code>--init</code></td>
					</tr>

					<tr class="border-b border-gray-800">
						<td class="py-2 px-3"><code>uppercaseKeys</code></td>
						<td class="py-2 px-3">boolean</td>
						<td class="py-2 px-3">Should env variables sent a warning if not uppercase.</td>
						<td class="py-2 px-3"><code>--uppercase-keys</code></td>
					</tr>

					<tr class="border-b border-gray-800">
						<td class="py-2 px-3"><code>expire Warnings</code></td>
						<td class="py-2 px-3">boolean</td>
						<td class="py-2 px-3">Enable expiration date warnings for environment variables</td>
						<td class="py-2 px-3"><code>--expire-warnings</code></td>
					</tr>

					<tr class="border-b border-gray-800">
						<td class="py-2 px-3"><code>inconsistentNamingWarnings</code></td>
						<td class="py-2 px-3">boolean</td>
						<td class="py-2 px-3">Enable inconsistent naming warnings for environment variables</td>
						<td class="py-2 px-3"><code>--inconsistent-naming-warnings</code></td>
					</tr>
				</tbody>
			</table>
		</div>
	</section>

	<section>
		<h2 class="mb-3 text-xl">Behavior Notes</h2>
		<ul class="list-disc list-inside space-y-2">
			<li>All options are optional; dotenv-diff uses sensible defaults when omitted.</li>
			<li>CLI flags always take precedence over configuration values.</li>
			<li>Load dotenv-diff.config.json if it's detected.</li>
			<li>The file must be valid JSON</li>
		</ul>
	</section>
</div>

<BackNext backHref="/installation" backTitle="Installation" nextHref="/sveltekit" nextTitle="SvelteKit" />
