<script lang="ts">
	import Title from '$components/Title.svelte';
	import BackNext from '$components/BackNext.svelte';
	import CodeBlock from '$components/CodeBlock.svelte';
</script>

<svelte:head>
	<title>dotenv-diff – T3-env Integration</title>
	<meta
		name="description"
		content="Learn how dotenv-diff integrates with t3-env to validate schema correctness, detect missing variables, and prevent incorrect client/server usage."
	/>
</svelte:head>

<div class="space-y-6">
	<Title fullText="T3-env validation" />

	<p class="mb-8 sm:mt-0">
		When a project uses <code>@t3-oss/env</code>, dotenv-diff automatically detects the
		<code>env.ts</code> (or <code>env.mjs</code>) schema and validates that environment variables
		are correctly defined, used, and separated between <strong>server</strong> and
		<strong>client</strong> schemas.
	</p>

	<p>
		This page covers all the warnings dotenv-diff may produce when scanning a T3-env project.
		It also explains how detection works and how to fix issues.
	</p>

	<!-- 1 -->
	<section>
		<h2 class="mb-3 text-xl">1. Missing variables in server/client schema</h2>

		<p>
			If a variable is used in code but not found in <code>server</code> or
			<code>client</code> schema, dotenv-diff warns that the schema is incomplete.
		</p>

		<CodeBlock
			label="src/lib/user.ts"
			command={`const token = process.env.USER_TOKEN;`}
		/>

		<p class="my-2">
			Warning:
			<br />
			Variable "USER_TOKEN" is not defined in t3-env schema. Add it to either server or
			client schema.
		</p>
	</section>

	<!-- 2 -->
	<section>
		<h2 class="mb-3 text-xl">2. Server variable used in client code</h2>

		<p>
			dotenv-diff inspects file paths to detect client-side usage (e.g. files inside
			<code>/components/</code>, <code>/pages/</code>, <code>/app/</code> or containing
			<code>"use client"</code>).
		</p>

		<CodeBlock
			label="src/components/Button.tsx"
			command={`"use client";

console.log(process.env.SECRET_KEY);`}
		/>

		<p class="my-2">
			Warning:
			<br />
			Variable "SECRET_KEY" is used in client code but only defined in server schema.
			Add it to client schema or move usage to server-only code.
		</p>
	</section>

	<!-- 3 -->
	<section>
		<h2 class="mb-3 text-xl">3. Client variable used in server code</h2>

		<p>
			Variables in the <code>client</code> schema are meant for the browser. Using them in
			server-only files is allowed by T3-env but often indicates confusion about data
			flow.
		</p>

		<CodeBlock
			label="src/pages/api/user.ts"
			command={`export default function handler() {
  const siteName = process.env.NEXT_PUBLIC_SITE_NAME; // from client schema
}`}
		/>

		<p class="my-2">
			Warning:
			<br />
			Variable "NEXT_PUBLIC_SITE_NAME" is used in server code but only defined in client
			schema.
		</p>
	</section>

	<!-- 4 -->
	<section>
		<h2 class="mb-3 text-xl">4. Missing variables in .env or .env.example</h2>

		<p>
			If variables defined in the schema are not present in your <code>.env</code> or
			<code>.env.example</code>, dotenv-diff warns about missing required values.
		</p>

		<CodeBlock
			label="src/env.ts"
			command={`server: {
  DATABASE_URL: z.string(),
  SECRET_KEY: z.string(),
}`}
		/>
<div class="mt-8"></div>
		<CodeBlock
			label=".env"
			command={`DATABASE_URL=postgresql://localhost:5432/db
# SECRET_KEY is missing`}
		/>

		<p class="my-2">
			Warning:
			<br />
			SECRET_KEY — Variable defined in schema but missing in .env
		</p>
	</section>

	<!-- 5 -->
	<section>
		<h2 class="mb-3 text-xl">5. Warning about NEXT_PUBLIC_ usage in T3-env projects</h2>

		<p>
			T3-env encourages defining client variables in the schema instead of relying on
			<code>NEXT_PUBLIC_*</code>. dotenv-diff warns when these prefixes are used.
		</p>

		<CodeBlock
			label="src/lib/config.ts"
			command={`export const url = process.env.NEXT_PUBLIC_OLD_API_URL;`}
		/>

		<p class="my-2">
			Warning:
			<br />
			Use t3-env client schema instead of NEXT_PUBLIC_ prefix for type-safe environment
			variables.
		</p>
	</section>

	<!-- 6 -->
	<section>
		<h2 class="mb-3 text-xl">6. Automatic detection</h2>

		<p>
			dotenv-diff automatically detects T3-env if an <code>env.ts</code> or
			<code>env.mjs</code> file exists and contains <code>createEnv()</code>.
		</p>

		<CodeBlock
			label="src/env.ts"
			command={`import { createEnv } from "@t3-oss/env-nextjs";

export const env = createEnv({...});`}
		/>

		<p class="my-2">✔️ No configuration required — detection works out of the box.</p>
	</section>

	<!-- 7 Summary -->
	<section>
		<h2 class="mb-3 text-xl">Summary of All Rules</h2>

		<ul class="list-disc list-inside space-y-2">
			<li>Variables must be defined in <code>server</code> or <code>client</code> schema</li>
			<li>Server variables → cannot be used in client files</li>
			<li>Client variables → should not be used in server files</li>
			<li>Schema variables must exist in <code>.env</code> or <code>.env.example</code></li>
			<li><code>NEXT_PUBLIC_*</code> prefix triggers warnings in T3-env projects</li>
		</ul>
	</section>

	<!-- Best Practices -->
	<section>
		<h2 class="mb-3 text-xl">Best Practices</h2>

		<ul class="list-disc list-inside space-y-2">
			<li>Define all environment variables explicitly in your schema</li>
			<li>Use <code>client</code> schema for anything exposed to the browser</li>
			<li>Do not rely on <code>NEXT_PUBLIC_*</code> in T3-env projects</li>
			<li>Ensure variables exist in both <code>.env</code> and <code>.env.example</code></li>
		</ul>
	</section>
</div>

<BackNext
	backHref="/nextjs"
	backTitle="Next.js"
	nextHref="/ignore-comments"
	nextTitle="Ignore Comments"
/>
