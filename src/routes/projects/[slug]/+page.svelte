<script lang="ts">
	let { data } = $props();
	const project = $derived(data.project);
	let playing = $state(false);
</script>

<svelte:head>
	<title>{project.title} – Aleksander Piotrowski</title>
	<meta name="description" content={project.summary} />
</svelte:head>

<article>
	<a class="back" href="/projects">Back to projects</a>
	<h1>{project.title}</h1>
	<p class="summary">{project.summary}</p>
	<ul class="tags">
		{#each project.tags as t}<li>{t}</li>{/each}
	</ul>

	{#if project.game}
		<div class="stage">
			{#if playing}
				<iframe src={project.game} title={project.title} allowfullscreen allow="fullscreen; autoplay; gamepad"></iframe>
			{:else}
				<button class="button" onclick={() => (playing = true)}>Play in browser</button>
			{/if}
		</div>
		<p class="hint">Keyboard controls; best played on a desktop.</p>
	{/if}

	<h2>About this project</h2>
	<p>{project.description}</p>

	{#if project.repo}
		<p><a class="button ghost" href={project.repo}>View source code</a></p>
	{/if}
</article>

<style>
	article { padding-top: 2.5rem; }
	.back { color: var(--muted); }
	h1 { font-size: clamp(2.2rem, 6vw, 3.75rem); margin: 1.5rem 0 1rem; }
	.summary { font-size: 1.25rem; color: var(--muted); }
	.stage {
		margin-top: 2rem; aspect-ratio: 16 / 9; width: 100%; background: #0d1017; border-radius: 0.5rem;
		display: grid; place-items: center; overflow: hidden;
	}
	iframe { width: 100%; height: 100%; border: 0; }
	.hint { color: var(--muted); font-size: 0.9rem; margin-top: 0.5rem; }
	h2 { margin: 2.5rem 0 0.75rem; }
</style>
