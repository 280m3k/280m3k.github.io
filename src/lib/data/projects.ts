export type Project = {
	slug: string;
	title: string;
	summary: string;
	description: string;
	tags: string[];
	repo?: string;
	game?: string; // path to Godot web export index.html
	year: number;
};

export const projects: Project[] = [
	{
		slug: 'my-game',
		title: 'Warm-Up',
		summary: 'A 2D platformer built in a 12-hour Game Jam.',
		description:
			'The game is a rage platformer, the game takes place in a ice cave in which you have to survive by running from a campfire to campfire.',
		tags: ['Godot 4', 'GDScript', 'Game Jam'],
		repo: 'https://github.com/you/my-game',
		game: '/games/my-game/game.html',
		year: 2023
	}
];
