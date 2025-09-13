<script lang="ts">
  import Title from '$components/Title.svelte';
  import BackNext from '$components/BackNext.svelte';
  import CodeBlock from '$components/CodeBlock.svelte';

  const command = 'dotenv-diff --scan-usage';
</script>

<svelte:head>
  <title>dotenv-diff - Scan Usage</title>
  <meta name="description" content="Scan your codebase with dotenv-diff to detect missing, unused, and duplicate environment variables." />
</svelte:head>

<div class="space-y-8">
  <Title fullText="Scan Usage" />

  <p>
    By default, running <code>dotenv-diff --scan-usage</code> will scan your entire codebase to detect
    every environment variable reference. It compares what your code <em>actually uses</em> with what’s
    defined in your <code>.env</code> files.
  </p>

  <p>
    This makes it easy to catch:
  </p>

  <ul class="list-disc list-inside space-y-1 text-gray-300">
    <li><strong>Missing keys</strong> → variables used in code but not defined in <code>.env</code></li>
    <li><strong>Unused keys</strong> → variables defined but never used anywhere</li>
    <li><strong>Duplicates</strong> → multiple definitions of the same variable</li>
    <li><strong>Secrets</strong> → suspicious keys like passwords or tokens hardcoded in your codebase</li>
  </ul>

  <CodeBlock label="Terminal" command={command} />

  <p class="mt-6">
    After the scan, you’ll see a clear report directly in your terminal. Here are some examples:
  </p>

  <!-- Example screenshots -->
  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
    <img src="/scan-missing.png" alt="Scan report showing missing keys" class="rounded-lg border border-gray-700 shadow-md" />
    <img src="/scan-unused.png" alt="Scan report showing unused keys" class="rounded-lg border border-gray-700 shadow-md" />
    <img src="/scan-duplicates.png" alt="Scan report showing duplicate keys" class="rounded-lg border border-gray-700 shadow-md md:col-span-2" />
  </div>

  <p class="mt-6">
    This helps keep your environment clean and production-ready, without guesswork.
  </p>
</div>

<BackNext backHref="/usage" nextHref="/compare" nextTitle="Compare" />
