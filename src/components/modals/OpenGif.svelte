<script lang="ts">
	export let open: boolean;
	export let onClose: () => void;
	export let imgSrc: string;
</script>

{#if open}
	<div
		class="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4"
		on:click={onClose}
		role="dialog"
		aria-modal="true"
		tabindex="0"
		on:keydown={(e) => {
			if (e.key === 'Escape' || e.key === 'Enter' || e.key === ' ') {
				onClose();
			}
		}}
	>
		<div
			class="relative max-h-full max-w-5xl"
			role="presentation"
			on:click|stopPropagation
			on:keydown|stopPropagation
		>
			<button
				class="absolute -top-12 right-0 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-white/10 text-xl text-white transition-colors hover:text-gray-300"
				on:click={onClose}
				aria-label="Close modal"
				type="button"
			>
				✕
			</button>
			<img
				src={imgSrc}
				alt="Demo of dotenv-diff - Full size"
				class="max-h-full max-w-full rounded-lg object-contain"
			/>
		</div>
	</div>
{/if}
