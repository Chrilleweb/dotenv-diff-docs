<script lang="ts">
	import Title from '$components/Title.svelte';
	import BackNext from '$components/BackNext.svelte';
	import CodeBlock from '$components/CodeBlock.svelte';
</script>

<svelte:head>
	<title>dotenv-diff – Next.js Rules</title>
	<meta
		name="description"
		content="Learn how dotenv-diff validates correct environment variable usage in Next.js projects, including NEXT_PUBLIC_ rules, server vs client restrictions, and common pitfalls."
	/>
</svelte:head>

<div class="space-y-6">
	<Title fullText="Next.js warnings" />

	<p class="mb-8 sm:mt-0">
		dotenv-diff includes a set of Next.js-specific rules that help you avoid unsafe or invalid
		environment variable usage. Next.js has strict separation between server-side and client-side
		code, and only variables prefixed with <code>NEXT_PUBLIC_</code> may be exposed to the browser.
		This page explains all warnings dotenv-diff may produce when scanning Next.js projects.
	</p>

	<!-- 1 -->
	<section>
		<h2 class="mb-3 text-xl">1. NEXT_PUBLIC_ variables cannot be used in server-only files</h2>

		<p>
			Next.js exposes <code>NEXT_PUBLIC_*</code> variables to the browser. These must never appear in
			server-only files such as API routes or <code>.server.ts</code> modules.
		</p>

		<CodeBlock
			label="app/api/test/route.ts"
			command={`export async function GET() {
  console.log(process.env.NEXT_PUBLIC_API);
}`}
		/>

		<p class="my-2">
			Warning:
			<br />
			NEXT_PUBLIC_ variables are exposed to the browser — don't use them in server-only files
		</p>
	</section>

	<!-- 2 -->
	<section>
		<h2 class="mb-3 text-xl">2. Client components may only access NEXT_PUBLIC_ variables</h2>

		<p>
			Any file containing <code>"use client"</code> runs in the browser, and therefore can only
			access environment variables prefixed with <code>NEXT_PUBLIC_</code>.
		</p>

		<CodeBlock
			label="Button.tsx"
			command={`"use client";
console.log(process.env.SECRET_TOKEN);`}
		/>

		<p class="my-2">
			Warning:
			<br />
			Client components can only access NEXT_PUBLIC_ environment variables
		</p>
	</section>

	<!-- 3 -->
	<section>
		<h2 class="mb-3 text-xl">3. process.env usage in client-side React must use NEXT_PUBLIC_</h2>

		<p>
			Regular React components (e.g. <code>.tsx</code>) that run on the client must also use
			<code>NEXT_PUBLIC_*</code>. dotenv-diff detects incorrect variable prefixes.
		</p>

		<CodeBlock
			label="Card.tsx"
			command={`"use client";
console.log(process.env.API_SECRET);`}
		/>

		<p class="my-2">
			Warning:
			<br />
			process.env inside client components must use NEXT_PUBLIC_ variables
		</p>
	</section>

	<!-- 4 -->
	<section>
		<h2 class="mb-3 text-xl">4. Server-only environment variables are allowed in API routes</h2>

		<p>
			Next.js allows private environment variables to be accessed in server-only files without any
			warnings. dotenv-diff will correctly detect this and produce no issues.
		</p>

		<CodeBlock
			label="app/api/user/route.ts"
			command={`export async function GET() {
  console.log(process.env.PRIVATE_KEY);
}`}
		/>

		<p class="my-2">✔️ Allowed — no warnings</p>
	</section>

	<!-- 5 Summary -->
	<section>
		<h2 class="mb-3 text-xl">Summary of All Rules</h2>

		<ul class="list-disc list-inside space-y-2">
			<li><code>NEXT_PUBLIC_*</code> → cannot be used in server-only modules</li>
			<li>Client components → may only use <code>NEXT_PUBLIC_*</code></li>
			<li>React components with <code>"use client"</code> → same rule as above</li>
			<li>Server files (API routes, route handlers) → may use private variables</li>
		</ul>
	</section>

	<!-- 6 Best practices -->
	<section>
		<h2 class="mb-3 text-xl">Best Practices</h2>

		<ul class="list-disc list-inside space-y-2">
			<li>Use <code>NEXT_PUBLIC_*</code> only for variables intended for the browser.</li>
			<li>Never expose secrets through <code>NEXT_PUBLIC_</code>.</li>
			<li>Keep private variables inside API routes or server components.</li>
			<li>Be explicit about client/server boundaries using <code>"use client"</code>.</li>
		</ul>
	</section>
</div>

<BackNext
	backHref="/sveltekit"
	backTitle="SvelteKit"
	nextHref="/ignore-comments"
	nextTitle="Ignore Comments"
/>
