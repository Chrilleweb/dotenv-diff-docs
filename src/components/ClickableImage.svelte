<script lang="ts">
  export let src: string;
  export let alt: string;
  export let onClick: () => void;
  export let extraClasses: string = '';
</script>

<button
  type="button"
  class="cursor-pointer rounded-md border-0 bg-transparent p-0 transition-opacity hover:opacity-90"
  on:click={onClick}
  aria-label="Click to view {alt} in full size"
>
  <img 
    {src}
    {alt}
    class="border-gray-700 shadow-md h-auto w-full md:w-2/3 max-w-lg rounded-md border object-contain {extraClasses}"
    draggable="false"
  />
</button>