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
		class="h-auto w-full max-w-lg rounded-md border border-gray-700 object-contain shadow-md md:w-2/3 {extraClasses}"
		draggable="false"
	/>
</button>
