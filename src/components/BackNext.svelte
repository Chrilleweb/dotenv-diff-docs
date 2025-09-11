<script lang="ts">
  export let backHref: string | null = null;   // null = disabled
  export let nextHref: string | null = null;   // null = disabled
  export let nextTitle: string | null = null;  // null = disabled
</script>

<div class="mt-12 flex justify-between">
  <!-- Back button -->
  {#if backHref}
    <a
      href={backHref}
      class="px-4 py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-100 transition"
    >
      ← Back
    </a>
  {:else}
    <span
      class="px-4 py-2 rounded-md border border-gray-200 text-gray-400 cursor-not-allowed select-none"
    >
      ← Back
    </span>
  {/if}

  <!-- Next button -->
  {#if nextHref}
    <a
      href={nextHref}
      class="px-4 py-2 rounded-md bg-navbar-color text-white hover:underline transition"
    >
      {nextTitle} →
    </a>
  {:else}
    <span
      class="px-4 py-2 rounded-md border border-gray-200 text-gray-400 cursor-not-allowed select-none"
    >
      Next →
    </span>
  {/if}
</div>
