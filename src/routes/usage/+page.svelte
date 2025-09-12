<script lang="ts">
  import Title from '$components/Title.svelte';
  import BackNext from '$components/BackNext.svelte';

  let copied = false;
  const command = 'dotenv-diff';

  async function copyToClipboard() {
    await navigator.clipboard.writeText(command);
    copied = true;
    setTimeout(() => (copied = false), 2000);
  }
</script>

<svelte:head>
  <title>dotenv-diff - Usage</title>
  <meta name="description" content="dotenv-diff usage examples" />
</svelte:head>

<div class="space-y-6">
  <Title fullText="Usage" />

  <div class="rounded-xl bg-navbar-color">
    <div class="flex items-center justify-between px-3 pt-2 pb-1.5 text-xs text-gray-400">
      <span>Terminal</span>
      <button
        class="flex h-7 w-16 cursor-pointer items-center justify-center rounded-md bg-gray-500 text-xs text-gray-300 transition hover:bg-gray-700"
        on:click={copyToClipboard}
      >
        {#if copied}
          ✔ Copied
        {:else}
          Copy
        {/if}
      </button>
    </div>

    <div class="px-4 pb-6 text-sm">
      <code><span class="text-sky-400">{command}</span></code>
    </div>
  </div>

  <p class="mt-6">
    Simply run dotenv-diff in your terminal. 
  </p>
</div>

<BackNext backHref="/installation" nextHref="/scan-usage" nextTitle="Scan Usage" />
