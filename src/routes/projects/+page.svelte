<script lang="ts">
	import { projects } from '#lib/data/projects';
	import ProjectRow from '#lib/components/ProjectRow.svelte';
</script>

<svelte:head>
	<title>Projects – Aleksander Piotrowski</title>
</svelte:head>

<h1 class="title">Projects</h1>
<div>
	{#each projects as project}
		<ProjectRow {project} />
	{/each}
</div>

<style>
	.title { font-size: clamp(2.2rem, 6vw, 3.5rem); margin: 3rem 0 2rem; }
</style>
