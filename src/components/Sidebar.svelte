<script lang="ts">
	const navItems = [
		{ title: 'Getting Started', href: '/getting-started' },
		{ title: 'Installation', href: '/installation' },
		{ title: 'Compare ', href: '/compare' }
	];
</script>

<nav class="fixed top-0 left-0 h-full w-64 bg-navbar-color p-8 text-white">
	<a href="/" class="text-xl font-semibold">dotenv-diff</a>

	<ul class="mt-8 space-y-4">
		{#each navItems as item}
			<li>
				<a
					href={item.href}
					class="hover:underline block rounded-md transition-colors">
					{item.title}
				</a>
			</li>
		{/each}
	</ul>
</nav>
