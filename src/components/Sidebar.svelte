<script lang="ts">
	import { onMount } from 'svelte';

	let open = false;
	let dropdownOpen: string | null = null;

	const navItems = [
		{ title: 'Installation', href: '/installation' },
		{ title: 'Scan', href: '/scan' },
		{ title: 'Flags', href: '/flags' },
		{
			title: 'Configuration',
			href: '/configuration'
		},
		{
			title: 'Frameworks',
			children: [
				{ title: 'Sveltekit', href: '/sveltekit' },
				{ title: 'Next.js', href: '/nextjs' }
			]
		},
		{ title: 't3-env', href: '/t3-env' },
		{
			title: 'Ignoring Comments',
			href: '/ignore-comments'
		},
		{
			title: 'Versions',
			children: [
				{title : 'v2.3.11 (newest)', href: '/v2.3.11' },
				{ title: '2.3.10', href: '/v2.3.10' },
				{ title: '2.3.9', href: '/v2.3.9' },
				{ title: '2.3.8', href: '/v2.3.8' },
				{ title: '2.3.7', href: '/v2.3.7' },
				{ title: '2.3.6', href: '/v2.3.6' },
				{ title: '2.3.5', href: '/v2.3.5' },
				{ title: '2.3.4', href: '/v2.3.4' },
				{ title: '2.3.2', href: '/v2.3.2' },
				{ title: '2.3.1', href: '/v2.3.1' },
				{ title: '2.3.0', href: '/v2.3.0' },
				{ title: '2.2.8', href: '/v2.2.8' },
				{ title: '2.2.7', href: '/v2.2.7' }
			]
		}
	];

	onMount(() => {
		const handler = () => {
			if (window.innerWidth >= 1024) open = false;
		};
		window.addEventListener('resize', handler);
		return () => window.removeEventListener('resize', handler);
	});

	function toggleDropdown(title: string) {
		dropdownOpen = dropdownOpen === title ? null : title;
	}
</script>

<!-- Desktop sidebar -->
<nav class="fixed top-0 left-0 z-40 hidden h-full w-64 bg-navbar-color p-8 text-gray-300 lg:block">
	<a href="/" class="text-xl font-semibold">dotenv-diff</a>
	<ul class="mt-8 space-y-2">
		{#each navItems as item}
			<li>
				{#if item.children}
					<div>
						<button
							class="w-full cursor-pointer text-left font-medium hover:underline"
							on:click={() => toggleDropdown(item.title)}
						>
							<span>{item.title}</span>
							<span class="ml-2 text-sm">
								{dropdownOpen === item.title ? '↑' : '↓'}
							</span>
						</button>
						{#if dropdownOpen === item.title}
							<ul class="mt-2 space-y-1 text-sm text-gray-300">
								{#each item.children as child}
									<li>
										<a href={child.href} class="block rounded-md transition-colors hover:underline">
											{child.title}
										</a>
									</li>
								{/each}
							</ul>
						{/if}
					</div>
				{:else}
					<a href={item.href} class="block rounded-md transition-colors hover:underline">
						{item.title}
					</a>
				{/if}
			</li>
		{/each}
	</ul>
</nav>

<!-- Burger menu button (mobile/tablet) -->
<button
	class="fixed top-6 right-6 z-50 flex h-12 w-12 flex-col items-center justify-center rounded-md bg-navbar-color text-white shadow-lg focus:outline-none lg:hidden"
	aria-label="Open menu"
	on:click={() => (open = !open)}
>
	<span
		class="mb-1 block h-1 w-7 rounded bg-white transition-all duration-300"
		style:transform={open ? 'rotate(45deg) translateY(10px)' : ''}
	></span>
	<span
		class="mb-1 block h-1 w-7 rounded bg-white transition-all duration-300"
		style:opacity={open ? 0 : 1}
	></span>
	<span
		class="block h-1 w-7 rounded bg-white transition-all duration-300"
		style:transform={open ? 'rotate(-45deg) translateY(-10px)' : ''}
	></span>
</button>

<!-- Mobile/Tablet menu -->
{#if open}
	<button
		type="button"
		class="fixed inset-0 z-40 bg-black/50 lg:hidden"
		aria-label="Close menu overlay"
		on:click={() => (open = false)}
		tabindex="0"
	></button>
	<nav
		class="fixed top-0 right-0 z-50 h-full w-64 bg-navbar-color p-8 text-white shadow-lg transition-transform duration-300 lg:hidden"
	>
		<a on:click={() => (open = false)} href="/" class="mb-8 block text-xl font-semibold"
			>dotenv-diff</a
		>
		<ul class="space-y-2">
			{#each navItems as item}
				<li>
					{#if item.children}
						<div>
							<button
								class="w-full text-left font-medium hover:underline"
								on:click={() => toggleDropdown(item.title)}
							>
								{item.title}
								<span class="ml-2 text-sm">
									{dropdownOpen === item.title ? '↑' : '↓'}
								</span>
							</button>
							{#if dropdownOpen === item.title}
								<ul class="mt-2 space-y-1 text-sm text-gray-300">
									{#each item.children as child}
										<li>
											<a
												href={child.href}
												class="block rounded-md transition-colors hover:underline"
												on:click={() => (open = false)}
											>
												{child.title}
											</a>
										</li>
									{/each}
								</ul>
							{/if}
						</div>
					{:else}
						<a
							href={item.href}
							class="block rounded-md transition-colors hover:underline"
							on:click={() => (open = false)}
						>
							{item.title}
						</a>
					{/if}
				</li>
			{/each}
		</ul>
	</nav>
{/if}
