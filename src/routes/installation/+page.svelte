<script lang="ts">
	import Title from '$components/Title.svelte';
	import BackNext from '$components/BackNext.svelte';
	import CodeBlock from '$components/CodeBlock.svelte';
	import InstallTabs from '$components/InstallTabs.svelte';
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

	<p>
		Get started with dotenv-diff in seconds. Choose your package manager below.
	</p>

	<InstallTabs />

	<p class="mt-8">
		Once installed, you can immediately start scanning your codebase for environment variable issues.
	</p>

	<CodeBlock label="Terminal" command="npx dotenv-diff" />

	<p class="mt-6">Simply run dotenv-diff in your terminal to get started.</p>
</div>

<BackNext backHref="/" backTitle="dotenv-diff" nextHref="/configuration" nextTitle="Configuration" />
