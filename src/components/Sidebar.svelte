<script lang="ts">
	const navItems = [
		{ title: 'Getting Started', href: '/getting-started' },
		{ title: 'Installation', href: '/installation' }
	];

	let active = '/getting-started';

	function setActive(href: string) {
		active = href;
	}
</script>

<nav class="fixed top-0 left-0 h-full w-64 border-r border-gray-200 bg-white p-6">
	<a href="/" class="text-xl font-semibold text-gray-900">📘 dotenv-diff</a>

	<ul class="mt-8 space-y-4">
		{#each navItems as item}
			<li>
				<a
					href={item.href}
					on:click={() => setActive(item.href)}
					class="block rounded-md px-2 py-1 transition-colors
                 {active === item.href
						? 'bg-blue-50 font-medium text-blue-600'
						: 'text-gray-600 hover:bg-gray-50 hover:text-blue-600'}"
				>
					{item.title}
				</a>
			</li>
		{/each}
	</ul>
</nav>
