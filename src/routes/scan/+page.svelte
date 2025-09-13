<script lang="ts">
  import Title from '$components/Title.svelte';
  import BackNext from '$components/BackNext.svelte';
  import CodeBlock from '$components/CodeBlock.svelte';

</script>

<svelte:head>
  <title>dotenv-diff - Scan Usage</title>
  <meta name="description" content="Scan your codebase with dotenv-diff to detect missing, unused, and duplicate environment variables." />
</svelte:head>

<div class="space-y-6">
  <Title fullText="Scan Usage" />

  <p>
    By default, running dotenv-diff will scan your entire codebase to detect
    every environment variable reference. It wil automatically compare against your .env file.
  </p>

  <p>If you dont have a .env file, dotenv-diff will just scan your codebase without any reference.</p>

  <p>
    This makes it easy to catch:
  </p>

  <ul class="list-disc list-inside space-y-1">
    <li>Missing keys→ variables used in code but not defined in <code>.env</code></li>
    <li>Unused keys→ variables defined but never used anywhere</li>
    <li>Duplicates→ multiple definitions of the same variable</li>
    <li>Secrets→ suspicious keys like passwords or tokens hardcoded in your codebase</li>
  </ul>

  <CodeBlock label="Terminal" command="dotenv-diff" />

  <p class="mt-6">
    After the scan, you’ll see a clear report directly in your terminal. Here are some examples:
  </p>

  <p>Find missing environment variables in your .env file, that are used in codebase</p>
    <img src="/scan-missing.png" alt="Scan report showing missing keys" class="rounded-lg border border-gray-700 shadow-md" />
    <p class="mt-6">Find unused environment variables in your .env file, that are not used in codebase</p>
    <img src="/scan-unused.png" alt="Scan report showing unused keys" class="rounded-lg border border-gray-700 shadow-md" />
    <p class="mt-6">Find duplicate keys in your .env file</p>
    <img src="/scan-duplicates.png" alt="Scan report showing duplicate keys" class="rounded-lg border border-gray-700 shadow-md md:col-span-2" />


  <p class="mt-6">
    This helps keep your environment clean and production-ready, without guesswork.
  </p>
</div>

<BackNext backHref="/usage" nextHref="/compare" nextTitle="Compare" />
