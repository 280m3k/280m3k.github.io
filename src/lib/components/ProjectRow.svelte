<script lang="ts">
	import type { Project } from '#lib/data/projects';
	let { project }: { project: Project } = $props();
</script>

<a class="row" href="/projects/{project.slug}">
	<span class="year">{project.year}</span>
	<span class="main">
		<strong>{project.title}</strong>
		<span class="summary">{project.summary}</span>
	</span>
	<ul class="tags">
		{#each project.tags as t}<li>{t}</li>{/each}
	</ul>
</a>

<style>
	.row {
		display: grid; grid-template-columns: 4rem 1fr auto; gap: 1.25rem; align-items: baseline;
		padding: 1.5rem 0.75rem; border-top: 1px solid var(--line); color: var(--ink); text-decoration: none;
		transition: background 0.15s, padding-left 0.15s;
	}
	.row:last-child { border-bottom: 1px solid var(--line); }
	.row:hover { background: var(--surface); padding-left: 1.5rem; }
	.year { color: var(--muted); }
	strong { display: block; font: 700 1.5rem/1.2 var(--display); }
	.summary { color: var(--muted); }
	@media (max-width: 40rem) {
		.row { grid-template-columns: 1fr; gap: 0.5rem; }
	}
</style>
