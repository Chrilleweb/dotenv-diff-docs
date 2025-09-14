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
		dotenv-diff supports many command line flags to customize its behavior. Here's a complete
		reference of all available options:
	</p>

	<div class="space-y-6">
		<section>
			<h2 class="mb-3 text-xl font-semibold">Core Operations</h2>
			<p class="mt-2">
				Scan your codebase for environment variable usage. This is the default behavior when no
				flags are specified.
			</p>
			<CodeBlock label="Terminal" command="dotenv-diff" />
		</section>

		<section>
			<h2 class="mb-3 text-xl font-semibold">File Specification</h2>
			<p class="mt-2">
				Specify a custom path to your .env file instead of using the default location, which is the
				root of your project.
			</p>
			<CodeBlock label="Terminal" command="dotenv-diff --env ./config/.env" />
			<p class="mt-2">Specify a custom path to your .env.example file.</p>
			<CodeBlock label="Terminal" command="dotenv-diff --example ./templates/.env.template" />
			<p class="mt-2">
				It does not matter whether you use the --env or --example flag, as both will work as the
				environment variable source.
			</p>
			<p class="mt-2">If you use both, --example will be prioritized over --env.</p>
		</section>

		<section>
			<h2 class="mb-3 text-xl font-semibold">File Pattern Control</h2>
			<p class="mt-2">
				Completely replace the default file patterns with your own comma-separated list.
			</p>
			<CodeBlock label="Terminal" command="dotenv-diff --files *.ts,*.js,src/**/*.vue" />
			<p class="mt-2">
				Add additional file patterns to the default scan patterns (extends rather than replaces).
			</p>
			<CodeBlock label="Terminal" command="dotenv-diff --include-files *.php,*.rb" />
			<p class="mt-2">Exclude specific file patterns from being scanned.</p>
			<CodeBlock label="Terminal" command="dotenv-diff --exclude-files *.test.js,dist/**/*" />
		</section>

		<section>
			<h2 class="mb-3 text-xl font-semibold">Filtering & Ignoring</h2>
			<p class="mt-2">Ignore specific environment variable keys during analysis.</p>
			<CodeBlock label="Terminal" command="dotenv-diff --ignore DEBUG,NODE_ENV,PORT" />
			<p class="mt-2">Use a regex pattern to ignore matching environment variable keys.</p>
			<CodeBlock label="Terminal" command="dotenv-diff --ignore-regex ^TEST_.*" />
		</section>

		<section>
			<h2 class="mb-3 text-xl font-semibold">Comparison Options</h2>

			<p class="mt-2">Compare all of your .env* files for differences.</p>
			<CodeBlock label="Terminal" command="dotenv-diff --compare" />

			<ClickableImage
				src="/compare.png"
				alt="Scan report showing unused keys"
				onClick={() => openModal('/compare.png')}
				extraClasses="mt-4"
			/>
			<p class="mt-2">Together with compare, check values between your .env* files</p>
			<CodeBlock label="Terminal" command="dotenv-diff --compare --check-values" />
			<p class="mt-2">Together with compare, you can allow duplicate values.</p>
			<CodeBlock label="Terminal" command="dotenv-diff --compare --allow-duplicates" />
			<p class="mt-2">
				Only run specific analysis categories. Available: missing, extra, empty, mismatch,
				duplicate, gitignore.
			</p>
			<CodeBlock label="Terminal" command="dotenv-diff --compare --only missing,duplicate" />
			<p>
				By running --compare without having a .env or .env.example file, you will be prompted to
				create one.
			</p>
			<ClickableImage
				src="/compare-yes.png"
				alt="Scan report showing unused keys"
				onClick={() => openModal('/compare-yes.png')}
			/>
			<p class="mt-2">
				You can automatically answer "Yes" to all prompts and run non-interactively. in this
				scenario, you will not be prompted to create a .env from your existing .env.example file.
			</p>
			<CodeBlock label="Terminal" command="dotenv-diff --compare --yes" />
		</section>

		<section>
			<h2 class="mb-3 text-xl font-semibold">Automation & CI/CD</h2>
					<p class="mt-2">
						Run in CI mode: non-interactive and never creates files. Perfect for continuous
						integration.
					</p>
                    <CodeBlock label="Terminal" command="dotenv-diff --ci" />
					<p class="mt-2">
						Enable strict mode - the process will fail on warnings, not just errors.
					</p>
                    <CodeBlock label="Terminal" command="dotenv-diff --strict" />

					<p class="mt-2">
						Automatically fix common issues like removing duplicates and adding missing keys.
					</p>
                    <CodeBlock label="Terminal" command="dotenv-diff --fix" />
		</section>

		<section>
			<h2 class="mb-3 text-xl font-semibold">Output Control</h2>

					<p class="mt-2">Output results in JSON format instead of human-readable text.</p>
                    <CodeBlock label="Terminal" command="dotenv-diff --json" />

					<p class="mt-2">Disable colored output for terminals that don't support colors.</p>
                    <CodeBlock label="Terminal" command="dotenv-diff --no-color" />

					<p class="mt-2">Hide variables that are defined in .env but not used in your codebase.</p>
                    <CodeBlock label="Terminal" command="dotenv-diff --no-show-unused" />

					<p class="mt-2">Hide the statistics summary at the end of the report.</p>
                    <CodeBlock label="Terminal" command="dotenv-diff --no-show-stats" />
		</section>

		<section>
			<h2 class="mb-3 text-xl font-semibold">Security</h2>

					<p class="mt-2">
						Disable potential secret detection during codebase scanning (secret detection is enabled by
						default).
					</p>
                    <CodeBlock label="Terminal" command="dotenv-diff --no-secrets" />

		</section>

		<section>
			<h2 class="mb-3 text-xl font-semibold">Common Flag Combinations</h2>

					<p class="mt-2">CI/CD Pipeline:</p>
                    <p>This command sets up a CI/CD pipeline with strict mode and compare it to your .env.example file.</p>
					<CodeBlock label="Terminal" command="dotenv-diff --ci --strict --example .env.example" />

                    <p class="mt-2">This command works well in a turbo monorepo setup.</p>
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

<BackNext backHref="/compare" nextHref="/examples" nextTitle="Examples" />

<OpenImg open={showModal} onClose={closeModal} imgSrc={currentImageSrc} />
