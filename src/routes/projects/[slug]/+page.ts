import { error } from '@sveltejs/kit';
import { projects } from '#lib/data/projects';

export function load({ params }) {
	const project = projects.find((p) => p.slug === params.slug);
	if (!project) error(404, 'Project not found');
	return { project };
}

export function entries() {
	return projects.map((p) => ({ slug: p.slug }));
}
