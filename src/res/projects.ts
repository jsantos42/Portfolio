import online_shop_api_png from "@public/images/projects/online_shop_api.png";
import fast_food_gif from "@public/images/projects/fast_food.gif";
import face_detector_gif from "@public/images/projects/face_detector.gif";
import online_booking_gif from "@public/images/projects/online_booking.gif";
import portfolio_gif from "@public/images/projects/portfolio.gif";
import pokemon_gif from "@public/images/projects/pokemon.gif";
import notepad_gif from "@public/images/projects/notepad.gif";
import minishell_gif from "@public/images/projects/minishell.gif";
import cub3d_gif from "@public/images/projects/cub3d.gif";
import so_long_gif from "@public/images/projects/so_long.gif";
import philo_gif from "@public/images/projects/philo.gif";
import {Project} from "@src/types";

export const projects: Project[] = [
	{
		title: 'Online Shop API',
		img: online_shop_api_png,
		brief: 'API with OAuth2 authentication that sends confirmation emails to clients',
		languages: ['Laravel', 'PHP', 'PHPunit'],
		keywords: ['backend', 'database', 'OAuth2'],
		repo: 'https://github.com/jsantos42/OnlineShopAPI',
		description: '',
	},
	{
		title: 'Fast-Food and Schools in Portugal',
		img: fast_food_gif,
		brief: 'Datascience project to find out a potential geographical clustering',
		languages: ['Python', 'R'],
		keywords: ['datascience', 'healthcare', 'jupyter notebook'],
		repo: 'https://github.com/jsantos42/fast_food_and_schools_in_Portugal',
		description: '',
	},
	{
		title: 'Face Detector',
		img: face_detector_gif,
		brief: 'Fullstack project, with API endpoints and login access',
		languages: [
			'React.js',
			'Node.js',
			'Express.js',
			'PostgreSQL',
			'JavaScript',
		],
		keywords: ['full-stack', 'front end', 'back end', 'API', 'AJAX'],
		repo: 'https://github.com/jsantos42/faceDetector',
		description: '',
	},
	{
		title: 'Online Booking',
		img: online_booking_gif,
		brief: 'Single Page Application to schedule appointments',
		languages: ['React.js', 'Styled-Components', 'JavaScript'],
		keywords: ['front end', 'Single Page Application'],
		repo: 'https://github.com/jsantos42/onlineBooking',
		description: '',
	},
	{
		title: 'Portfolio',
		img: portfolio_gif,
		brief: 'Website showcasing my main projects',
		languages: ['React.js', 'Styled-Components', 'JavaScript'],
		keywords: ['front end', 'website', 'portfolio'],
		repo: 'https://github.com/jsantos42/portfolio',
		description: '',
	},
	{
		title: 'Moves of Pokémons',
		img: pokemon_gif,
		brief: 'Searchable list, using AJAX requests and a public API',
		languages: ['React.js', 'Styled-Components', 'JavaScript'],
		keywords: ['front end', 'API', 'AJAX'],
		repo: 'https://github.com/jsantos42/MovesOfPokemons',
		description: '',
	},
	{
		title: 'Notepad',
		img: notepad_gif,
		brief: 'Simple Qt app',
		languages: ['C++', 'Qt'],
		keywords: ['front end', 'desktop', 'app'],
		repo: 'https://github.com/jsantos42/Qt/tree/main/Notepad',
		description: '',
	},
	{
		title: 'Minishell',
		img: minishell_gif,
		brief: 'A Unix shell, implemented with an Abstract Syntax Tree',
		languages: ['C'],
		keywords: ['shell', 'linux', 'unix'],
		repo: 'https://github.com/jsantos42/minishell',
		description: '',
	},
	{
		title: 'Cub3D',
		img: cub3d_gif,
		brief: 'Simple 3D maze using raycasting',
		languages: ['C'],
		keywords: ['game development', 'graphics', '3d'],
		repo: 'https://github.com/jsantos42/cub3d',
		description: '',
	},
	{
		title: 'So Long',
		img: so_long_gif,
		brief: 'Simple 2D game, using textures and sprites',
		languages: ['C'],
		keywords: ['game development', 'graphics', '2d'],
		repo: 'https://github.com/jsantos42/so_long',
		description: '',
	},
	{
		title: 'Dining Philosophers',
		img: philo_gif,
		brief: 'Implementation of a concurrent algorithm, using threads',
		languages: ['C', 'C++'],
		keywords: ['concurrency', 'threads', 'unix'],
		repo: 'https://github.com/jsantos42/Dining_Philosophers',
		description: '',
	},
];

