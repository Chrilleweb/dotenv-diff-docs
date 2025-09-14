<script lang="ts">
	import { onMount } from 'svelte';

	let open = false;
	let dropdownOpen: string | null = null;

	const navItems = [
		{ title: 'Introduction', href: '/' },
		{ title: 'Installation', href: '/installation' },
		{ title: 'Scan', href: '/scan' },
		{ title: 'Flags', href: '/flags' },
		{
			title: 'Versions',
			children: [
				{ title: '2.2.4 (newest)', href: '/v2.2.4' },
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
<nav class="fixed top-0 left-0 h-full w-64 bg-navbar-color p-8 text-gray-300 hidden lg:block z-40">
	<a href="/" class="text-xl font-semibold">dotenv-diff</a>
	<ul class="mt-8 space-y-2">
		{#each navItems as item}
			<li>
				{#if item.children}
					<div>
						<button
							class="cursor-pointer w-full text-left font-medium hover:underline"
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
										<a
											href={child.href}
											class="hover:underline block rounded-md transition-colors"
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
						class="hover:underline block rounded-md transition-colors"
					>
						{item.title}
					</a>
				{/if}
			</li>
		{/each}
	</ul>
</nav>

<!-- Burger menu button (mobile/tablet) -->
<button
	class="fixed top-6 right-6 z-50 flex flex-col items-center justify-center w-12 h-12 rounded-md bg-navbar-color text-white shadow-lg lg:hidden focus:outline-none"
	aria-label="Open menu"
	on:click={() => (open = !open)}
>
	<span
		class="block w-7 h-1 bg-white rounded mb-1 transition-all duration-300"
		style:transform={open ? 'rotate(45deg) translateY(10px)' : ''}
	></span>
	<span
		class="block w-7 h-1 bg-white rounded mb-1 transition-all duration-300"
		style:opacity={open ? 0 : 1}
	></span>
	<span
		class="block w-7 h-1 bg-white rounded transition-all duration-300"
		style:transform={open ? 'rotate(-45deg) translateY(-10px)' : ''}
	></span>
</button>

<!-- Mobile/Tablet menu -->
{#if open}
	<button
		type="button"
		class="fixed inset-0 bg-black/50 z-40 lg:hidden"
		aria-label="Close menu overlay"
		on:click={() => (open = false)}
		tabindex="0"
	></button>
	<nav
		class="fixed top-0 right-0 h-full w-64 bg-navbar-color p-8 text-white z-50 shadow-lg transition-transform duration-300 lg:hidden"
	>
		<a href="/" class="text-xl font-semibold block mb-8">dotenv-diff</a>
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
												class="hover:underline block rounded-md transition-colors"
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
							class="hover:underline block rounded-md transition-colors"
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
