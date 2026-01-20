<script lang="ts">
	import Title from '$components/Title.svelte';
	import BackNext from '$components/BackNext.svelte';
	import CodeBlock from '$components/CodeBlock.svelte';
</script>

<svelte:head>
	<title>dotenv-diff – SvelteKit Rules</title>
	<meta
		name="description"
		content="Learn how dotenv-diff validates correct environment variable usage in SvelteKit projects, including VITE_, PUBLIC_, private imports, and common pitfalls."
	/>
</svelte:head>

<div class="space-y-6">
	<Title fullText="SvelteKit warnings" />

	<p class="mb-8 sm:mt-0">
		dotenv-diff includes a set of SvelteKit-specific rules designed to detect invalid or unsafe
		environment variable usage. SvelteKit has strict conventions around which variables are public,
		which are private, and how they must be accessed. This page explains all warnings that
		dotenv-diff can produce when scanning your codebase.
	</p>

	<section>
		<h2 class="mb-3 text-xl">1. import.meta.env must use VITE_ prefix</h2>

		<p>
			SvelteKit only exposes variables prefixed with <code>VITE_</code> to the client through
			<code>import.meta.env</code>. Using any other prefix will produce a warning.
		</p>

		<CodeBlock label="+page.ts" command={`import.meta.env.PUBLIC_URL`} />

		<p class="my-2">
			This triggers:
			<br />
			Variables accessed through import.meta.env must start with "VITE_"
		</p>

		<h3 class="mt-4 mb-2 text-lg">Correct usage:</h3>
		<CodeBlock label="+page.ts" command={`import.meta.env.VITE_PUBLIC_URL`} />
	</section>

	<section>
		<h2 class="mb-3 text-xl">2. process.env must only be used in server files</h2>

		<p>
			process.env is server-only in SvelteKit. Using it in client files will trigger a warning,
			regardless of variable prefix.
		</p>

		<CodeBlock label="index.ts" command={`process.env.VITE_SECRET`} />

		<p class="my-2">
			dotenv-diff warns:
			<br />
			process.env should only be used in server files
		</p>
	</section>

	<section>
		<h2 class="mb-3 text-xl">3. $env/dynamic/private cannot be used in client-side code</h2>

		<p>
			SvelteKit provides access to private environment variables through $env/dynamic/private. These
			variables must not be used in client-side code.
		</p>

		<CodeBlock label="+page.svelte" command={`import { env } from '$env/dynamic/private';`} />

		<p class="my-2">
			dotenv-diff warns:
			<br />
			$env/dynamic/private cannot be used in client-side code
		</p>
	</section>

	<section>
		<h2 class="mb-3 text-xl">4. $env/dynamic/public variables must start with "PUBLIC_"</h2>
		<p>
			Environment variables intended for the client must be accessed through $env/dynamic/public and
			must start with <code>PUBLIC_</code>.
		</p>

		<CodeBlock label="+page.svelte" command={`import { env } from '$env/dynamic/public';`} />

		<p class="my-2">
			dotenv-diff warns:
			<br />
			$env/dynamic/public variables must start with "PUBLIC_"
		</p>
	</section>

	<section>
		<h2 class="mb-3 text-xl">5. Private variables cannot start with PUBLIC_</h2>

		<p>
			When importing private variables using $env/static/private, the variable must not be
			client-exposed. dotenv-diff warns if a variable begins with PUBLIC_ .
		</p>

		<CodeBlock label="app.ts" command={`import { PUBLIC_KEY } from '$env/static/private';`} />

		<p class="my-2">
			Warning:
			<br />
			$env/static/private variables must not start with "PUBLIC_"
		</p>
	</section>

	<section>
		<h2 class="mb-3 text-xl">6. Private variables cannot be used inside client files</h2>

		<p>client files run in the browser. $env/static/private imports are not allowed.</p>

		<CodeBlock label="App.svelte" command={`import { SECRET_KEY } from '$env/static/private';`} />

		<p class="my-2">
			Warning:
			<br />
			$env/static/private variables cannot be used in client-side code
		</p>
	</section>

	<section>
		<h2 class="mb-3 text-xl">7. PUBLIC_ variables cannot be accessed through private imports</h2>

		<p>
			Environment variables intended for the client start with PUBLIC_. These cannot be accessed
			through $env/dynamic/private or $env/static/private.
		</p>

		<CodeBlock label="hooks.server.ts" command={`import { env } from '$env/dynamic/private';`} />

		<p class="my-2">
			dotenv-diff warns:
			<br />
			Private environment variables must not start with "PUBLIC_"
		</p>
	</section>

	<section>
		<h2 class="mb-3 text-xl">Summary of All Rules</h2>

		<ul class="list-inside list-disc space-y-2">
			<li>import.meta.env → must use VITE_*</li>
			<li>process.env → allowed only in server files</li>
			<li>$env/dynamic/private → server-only, never PUBLIC_*</li>
			<li>$env/dynamic/public → must use PUBLIC_*</li>
			<li>$env/static/private → server-only, never PUBLIC_*</li>
			<li>$env/static/public → must use PUBLIC_*</li>
			<li>Private env vars → not allowed in client-side code</li>
		</ul>
	</section>

	<section>
		<h2 class="mb-3 text-xl">Best Practices</h2>
		<ul class="list-inside list-disc space-y-2">
			<li>Use <code>PUBLIC_*</code> only for values intended for the browser.</li>
			<li>Use <code>VITE_*</code> only when accessed via <code>import.meta.env</code>.</li>
			<li>Use private variables only in server-side code.</li>
		</ul>
	</section>
</div>

<BackNext
	backHref="/hooks-ci"
	backTitle="Git Hooks and CI/CD"
	nextHref="/nextjs"
	nextTitle="Next.js"
/>
