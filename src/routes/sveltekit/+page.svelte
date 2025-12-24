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

		<CodeBlock
			label="+page.ts"
			command={`import.meta.env.PUBLIC_URL`}
		/>

		<p class="my-2">
			This triggers:
			<br />
			Variables accessed through import.meta.env must start with "VITE_"
		</p>

		<h3 class="mb-2 mt-4 text-lg">Correct usage:</h3>
		<CodeBlock
			label="+page.ts"
			command={`import.meta.env.VITE_PUBLIC_URL`}
		/>
	</section>

	<section>
		<h2 class="mb-3 text-xl">2. VITE_ variables may not be accessed via process.env</h2>

		<p>
			<code>process.env</code> is server-only. Since <code>VITE_</code> variables are intended for the
			client, SvelteKit does not allow mixing the two systems.
		</p>

		<CodeBlock
			label="index.ts"
			command={`process.env.VITE_SECRET`}
		/>

		<p class="my-2">
			dotenv-diff warns:
			<br />
			Variables accessed through process.env cannot start with "VITE_"
		</p>
	</section>

	<section>
		<h2 class="mb-3 text-xl">3. Private variables cannot start with VITE_</h2>

		<p>
			When importing private variables using <code>$env/static/private</code>, the variable must not be
			client-exposed. dotenv-diff warns if a variable begins with <code>VITE_</code>.
		</p>

		<CodeBlock
			label="app.ts"
			command={`import { VITE_KEY } from '$env/static/private/VITE_KEY';`}
		/>

		<p class="my-2">
			Warning:
			<br />
			$env/static/private variables must not start with "VITE_"
		</p>
	</section>

	<section>
		<h2 class="mb-3 text-xl">4. PUBLIC_ variables may never be used in private imports</h2>

		<p>
			All variables prefixed with <code>PUBLIC_</code> are safe for the browser. Therefore they must
			not appear inside <code>$env/static/private</code> as they imply exposing private content.
		</p>

		<CodeBlock
			label="test.ts"
			command={`import { PUBLIC_TOKEN } from '$env/static/private/PUBLIC_TOKEN';`}
		/>

		<p class="my-2">
			Warning:
			<br />
			Variables starting with PUBLIC_ may never be used in private env imports
		</p>
	</section>

	<section>
		<h2 class="mb-3 text-xl">5. Private variables cannot be used inside .svelte files</h2>

		<p>
			Svelte components run partly in the browser. Even if the script is module-scoped,
			<code>$env/static/private</code> imports are not allowed.
		</p>

		<CodeBlock
			label="App.svelte"
			command={`import { SECRET_KEY } from '$env/static/private/SECRET_KEY';`}
		/>

		<p class="my-2">
			Warning:
			<br />
			Private environment variables cannot be used in Svelte components
		</p>
	</section>

	<section>
		<h2 class="mb-3 text-xl">6. Private variables must only be used in +page.server.ts</h2>

		<p>
			Pages that run on the client (<code>+page.ts</code>) cannot import server-only variables.
		</p>

		<CodeBlock
			label="+page.ts"
			command={`import { SECRET_KEY } from '$env/static/private/SECRET_KEY';`}
		/>

		<p class="my-2">
			Warning:
			<br />
			Private env vars should only be used in +page.server.ts
		</p>
	</section>

	<section>
		<h2 class="mb-3 text-xl">7. $env/dynamic/public is discouraged</h2>

		<p>
			SvelteKit recommends avoiding <code>$env/dynamic/public</code> because values can change at
			runtime and may leak unintentionally. dotenv-diff warns whenever it appears.
		</p>

		<CodeBlock
			label="app.ts"
			command={`import { PUBLIC_RUNTIME } from '$env/dynamic/public/PUBLIC_RUNTIME';`}
		/>

		<p class="my-2">
			Warning:
			<br />
			$env/dynamic/public is strongly discouraged
		</p>
	</section>

	<section>
		<h2 class="mb-3 text-xl">Summary of All Rules</h2>

		<ul class="list-disc list-inside space-y-2">
			<li><code>import.meta.env</code> → must use <code>VITE_*</code></li>
			<li><code>process.env</code> → cannot use <code>VITE_*</code></li>
			<li><code>$env/static/private</code> → cannot import <code>VITE_*</code></li>
			<li><code>$env/static/private</code> → cannot import <code>PUBLIC_*</code></li>
			<li><code>$env/static/private</code> → allowed only in <code>+page.server.ts</code></li>
			<li>Private env vars → not allowed inside <code>.svelte</code> files</li>
			<li><code>$env/dynamic/public</code> → discouraged usage</li>
		</ul>
	</section>

	<section>
		<h2 class="mb-3 text-xl">Best Practices</h2>
		<ul class="list-disc list-inside space-y-2">
			<li>Use <code>PUBLIC_*</code> only for values intended for the browser.</li>
			<li>Use <code>VITE_*</code> only when accessed via <code>import.meta.env</code>.</li>
			<li>Restrict sensitive variables to server files.</li>
			<li>Avoid mixing access methods across systems.</li>
		</ul>
	</section>
</div>

<BackNext backHref="/configuration" backTitle="Configuration" nextHref="/nextjs" nextTitle="Next.js" />
