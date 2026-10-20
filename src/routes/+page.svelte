<script lang="ts">
	import { projects } from '#lib/data/projects';
	import ProjectRow from '#lib/components/ProjectRow.svelte';
</script>

<svelte:head>
	<title>Aleksander Piotrowski – Portfolio</title>
	<meta name="description" content="Portfolio of Aleksander Piotrowski" />
</svelte:head>

<section class="hero">
	<h1>I am a Student who is intrested in game-dev and IT</h1>
	<p class="lead">
		I'm Aleksander Piotrowski, A computer Science Student Studying at SDU Vejle.
		I Participate in Game Jams, hackathons and CTFs.
	</p>
	<p class="cta">
		<a class="button" href="/projects">See my projects</a>
		<a class="button ghost" href="/contact">Get in touch</a>
	</p>
</section>
<style>
	.hero { padding: 5rem 0 6rem; }
	.hero h1 { max-width: 14ch; }
	.lead { font-size: 1.3rem; color: var(--muted); margin-top: 1.5rem; }
	.cta { display: flex; gap: 0.75rem; flex-wrap: wrap; margin-top: 2rem; }
	.list { margin-top: 1.5rem; }
</style>
