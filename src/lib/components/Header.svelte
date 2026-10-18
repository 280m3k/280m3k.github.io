<script lang="ts">
	import { page } from '$app/state';
	const links = [
		{ href: '/projects', label: 'Projects' },
		{ href: '/about', label: 'About' },
		{ href: '/contact', label: 'Contact' }
	];
</script>

<header>
	<div class="wrap bar">
		<a class="name" href="/">Aleksander Piotrowski</a>
		<nav aria-label="Main">
			{#each links as l}
				<a href={l.href} aria-current={page.url.pathname.startsWith(l.href) ? 'page' : undefined}>{l.label}</a>
			{/each}
		</nav>
	</div>
</header>

<style>
	.bar { display: flex; justify-content: space-between; align-items: center; padding-block: 1.25rem; }
	.name { font: 800 1.2rem var(--display); color: var(--ink); text-decoration: none; }
	nav { display: flex; gap: 1.25rem; }
	nav a { color: var(--muted); text-decoration: none; padding-bottom: 2px; }
	nav a:hover { color: var(--ink); }
	nav a[aria-current='page'] { color: var(--ink); border-bottom: 2px solid var(--accent); }
</style>
