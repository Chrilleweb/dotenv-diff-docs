<script lang="ts">
	import Title from '$components/Title.svelte';
	import BackNext from '$components/BackNext.svelte';
	import CodeBlock from '$components/CodeBlock.svelte';
</script>

<svelte:head>
	<title>dotenv-diff - Installation</title>
	<meta
		name="description"
		content="Install dotenv-diff to start scanning your codebase for environment variable issues."
	/>
</svelte:head>

<div class="space-y-6">
	<Title fullText="Installation" />

	<CodeBlock label="Terminal" command="npm install dotenv-diff" />
	<CodeBlock label="Terminal" command="pnpm add dotenv-diff" />
	<CodeBlock label="Terminal" command="yarn add dotenv-diff" />

	<p class="mt-8">
		Once installed, you can immediately start scanning your codebase files for missing, unused,
		duplicate or detect potential secrets.
	</p>

	<CodeBlock label="Terminal" command="dotenv-diff" />

	<p class="mt-6">Simply run dotenv-diff in your terminal, it's that easy!</p>
</div>

<BackNext backHref="/" backTitle="dotenv-diff" nextHref="/configuration" nextTitle="Configuration" />
