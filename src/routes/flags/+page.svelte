<script lang="ts">
	import Title from '$components/Title.svelte';
	import BackNext from '$components/BackNext.svelte';
	import CodeBlock from '$components/CodeBlock.svelte';
	import ClickableImage from '$components/ClickableImage.svelte';
	import OpenImg from '$components/modals/OpenGif.svelte';

	let showModal = false;
	let currentImageSrc = '';

	function openModal(imgSrc: string) {
		currentImageSrc = imgSrc;
		showModal = true;
	}

	function closeModal() {
		showModal = false;
		currentImageSrc = '';
	}

	function handleKeydown(event: KeyboardEvent) {
		if (event.key === 'Escape' && showModal) {
			event.preventDefault();
			closeModal();
		}
	}
</script>

<svelte:window on:keydown={handleKeydown} />

<svelte:head>
	<title>dotenv-diff - Command Line Flags</title>
	<meta
		name="description"
		content="Complete reference for all dotenv-diff command line flags and options."
	/>
</svelte:head>

<div class="space-y-6">
	<Title fullText="Command Line Flags" />

	<p>
	Just like configuration, dotenv-diff supports many command line flags to customize its behavior. Here's a complete
		reference of all available options:
	</p>

	<div class="space-y-6">
		<section>
			<h2 class="mb-3 text-xl">Core Operations</h2>
			<p class="my-2">
				Scan your codebase for environment variable usage. This is the default behavior when no
				flags are specified.
			</p>
			<CodeBlock label="Terminal" command="dotenv-diff" />
		</section>

		<section>
			<h2 class="mb-3 text-xl">File Specification</h2>
			<p class="my-2">
				Specify a custom path to your .env file instead of using the default location, which is the
				root of your project.
			</p>
			<CodeBlock label="Terminal" command="dotenv-diff --env ./config/.env" />
			<p class="my-2">Specify a custom path to your .env.example file.</p>
			<CodeBlock label="Terminal" command="dotenv-diff --example ./templates/.env.template" />
			<p class="my-2">
				It does not matter whether you use the --env or --example flag, as both will work as the
				environment variable source.
			</p>
			<p class="my-2">If you use both, --example will be prioritized over --env.</p>
		</section>

		<section>
			<h2 class="mb-3 text-xl">File Pattern Control</h2>
			<p class="my-2">
				Completely replace the default file patterns with your own comma-separated list.
			</p>
			<CodeBlock label="Terminal" command="dotenv-diff --files *.ts,*.js,src/**/*.vue" />
			<p class="my-2">
				Add additional file patterns to the default scan patterns (extends rather than replaces).
			</p>
			<CodeBlock label="Terminal" command="dotenv-diff --include-files *.php,*.rb" />
			<p class="my-2">Exclude specific file patterns from being scanned.</p>
			<CodeBlock label="Terminal" command="dotenv-diff --exclude-files *.test.js,dist/**/*" />
		</section>

		<section>
			<h2 class="mb-3 text-xl">Filtering & Ignoring</h2>
			<p class="my-2">Ignore specific environment variable keys during analysis.</p>
			<CodeBlock label="Terminal" command="dotenv-diff --ignore DEBUG,NODE_ENV,PORT" />
			<p class="my-2">Use a regex pattern to ignore matching environment variable keys.</p>
			<CodeBlock label="Terminal" command="dotenv-diff --ignore-regex ^TEST_.*" />
		</section>

		<section>
			<h2 class="mb-3 text-xl">Comparison Options</h2>

			<p class="my-2">Compare all of your .env* files for differences.</p>
			<CodeBlock label="Terminal" command="dotenv-diff --compare" />

			<ClickableImage
				src="/compare.png"
				alt="Scan report showing unused keys"
				onClick={() => openModal('/compare.png')}
				extraClasses="mt-4"
			/>
			<p class="my-2">Together with compare, check values between your .env* files</p>
			<CodeBlock label="Terminal" command="dotenv-diff --compare --check-values" />
			<p class="my-2">Together with compare, you can allow duplicate values.</p>
			<CodeBlock label="Terminal" command="dotenv-diff --compare --allow-duplicates" />
			<p class="my-2">
				Only run specific analysis categories. Available: missing, extra, empty, mismatch,
				duplicate, gitignore.
			</p>
			<CodeBlock label="Terminal" command="dotenv-diff --compare --only missing,duplicate" />

			<p class="my-2">
				If you want to scan your project without comparing against any .env files, use:
			</p>
			<CodeBlock label="Terminal" command="dotenv-diff --no-compare" />

			<p class="my-2">
				By running --compare without having a .env or .env.example file, you will be prompted to
				create one.
			</p>
			<ClickableImage
				src="/compare-yes.png"
				alt="Scan report showing unused keys"
				onClick={() => openModal('/compare-yes.png')}
			/>
			<p class="my-2">
				You can automatically answer "Yes" to all prompts and run non-interactively. In this
				scenario, you will not be prompted to create a .env from your existing .env.example file.
			</p>
			<CodeBlock label="Terminal" command="dotenv-diff --compare --yes" />
		</section>

		<section>
			<h2 class="mb-3 text-xl">Automation & CI/CD</h2>
			<p class="my-2">
				Run in CI mode: non-interactive and never creates files. Perfect for continuous integration.
			</p>
			<CodeBlock label="Terminal" command="dotenv-diff --ci" />
			<p class="my-2">Enable strict mode - the process will fail on warnings, not just errors.</p>
			<CodeBlock label="Terminal" command="dotenv-diff --strict" />

			<p class="my-2">
				Automatically fix common issues like removing duplicates and adding missing keys.
			</p>
			<CodeBlock label="Terminal" command="dotenv-diff --fix" />
		</section>

		<section>
			<h2 class="mb-3 text-xl">Output Control</h2>

			<p class="my-2">Output results in JSON format instead of human-readable text.</p>
			<CodeBlock label="Terminal" command="dotenv-diff --json" />

			<p class="my-2">Disable colored output for terminals that don't support colors.</p>
			<CodeBlock label="Terminal" command="dotenv-diff --no-color" />

			<p class="my-2">Hide variables that are defined in .env but not used in your codebase.</p>
			<CodeBlock label="Terminal" command="dotenv-diff --no-show-unused" />

			<p class="my-2">Hide the statistics summary at the end of the report.</p>
			<CodeBlock label="Terminal" command="dotenv-diff --no-show-stats" />
		</section>

		<section>
			<h2 class="mb-3 text-xl">Security</h2>

			<p class="my-2">
				Disable potential secret detection during codebase scanning (secret detection is enabled by
				default).
			</p>
			<CodeBlock label="Terminal" command="dotenv-diff --no-secrets" />

			<p class="my-2">
				You can also ignore specific URLs from being flagged during secret scanning using
				<code>--ignore-urls</code>.
			</p>
			<CodeBlock label="Terminal" command="dotenv-diff --ignore-urls https://safe.com,https://cdn.local" />
			<p class="my-2">
				This is useful when your project contains public or whitelisted URLs that should not trigger
				false positive secret warnings.
			</p>

			<p class="my-2">
				If you only want to ignore a specific line in your codebase from potential secrets
				detection, you can add <code>// dotenv-diff-ignore</code> comment at the end of the line:
			</p>
			<CodeBlock
				label="example.ts"
				command="const hardcodedURL = 'https://thisShouldBeIgnored.com'; // dotenv-diff-ignore"
			/>
		</section>

		<section>
			<h2 class="mb-3 text-xl">Configuration & Initialization</h2>

			<p class="my-2">
				Create a sample configuration file in your project root using:
			</p>
			<CodeBlock label="Terminal" command="dotenv-diff --init" />

			<p class="my-2">
				This generates a <code>dotenv-diff.config.json</code> file with default settings, which you
				can edit and commit to version control.
			</p>

			<CodeBlock
				label="dotenv-diff.config.json"
				command={`{
  "strict": false,
  "example": ".env.example",
  "ignore": ["NODE_ENV", "VITE_MODE"],
  "ignoreUrls": ["https://example.com"]
}`}
			/>
		</section>

		<section>
			<h2 class="mb-3 text-xl">Common Flag Combinations</h2>

			<p class="my-2">CI/CD Pipeline:</p>
			<p class="my-2">
				This command sets up a CI/CD pipeline with strict mode and compare it to your .env.example
				file.
			</p>
			<CodeBlock label="Terminal" command="dotenv-diff --ci --strict --example .env.example" />

			<p class="my-2">This command works well in a turbo monorepo setup.</p>
			<CodeBlock
				label="Terminal"
				command='dotenv-diff --include-files "./src/**/*,../../packages/**/*"'
			/>
		</section>
	</div>

	<p>
		These flags give you complete control over how dotenv-diff analyzes your environment variables,
		making it perfect for any workflow or CI/CD pipeline.
	</p>
</div>

<BackNext backHref="/ignore-comments" backTitle="Ignore Comments" nextHref="/v2.3.4" nextTitle="v2.3.4" />

<OpenImg open={showModal} onClose={closeModal} imgSrc={currentImageSrc} />
