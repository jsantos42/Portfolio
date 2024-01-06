import online_shop_api_png from '@public/images/projects/online_shop_api.png';
import fast_food_gif from '@public/images/projects/fast_food.gif';
import face_detector_gif from '@public/images/projects/face_detector.gif';
import online_booking_gif from '@public/images/projects/online_booking.gif';
import portfolio_gif from '@public/images/projects/portfolio.gif';
import pokemon_gif from '@public/images/projects/pokemon.gif';
import notepad_gif from '@public/images/projects/notepad.gif';
import minishell_gif from '@public/images/projects/minishell.gif';
import cub3d_gif from '@public/images/projects/cub3d.gif';
import so_long_gif from '@public/images/projects/so_long.gif';
import philo_gif from '@public/images/projects/philo.gif';
import {
	Database,
	Field,
	Framework,
	ProgrammingLanguage,
	Project,
	StylingFramework,
	TestingFramework,
} from '@src/types';

export const projects: Project[] = [
	{
		title: 'Online Shop API',
		img: online_shop_api_png,
		brief: 'API with OAuth2 authentication that sends confirmation emails to clients',
		description: '',
		repo: 'https://github.com/jsantos42/OnlineShopAPI',
		field: ['Back End'],
		language: ['PHP'],
		framework: ['Laravel'],
		styling: undefined,
		db: ['MySQL'],
		testingFramework: ['PHPunit'],
		year: ['2023'],
	},
	{
		title: 'Fast-Food and Schools in Portugal',
		img: fast_food_gif,
		brief: 'Datascience project to find out a potential geographical clustering',
		description: '',
		repo: 'https://github.com/jsantos42/fast_food_and_schools_in_Portugal',
		field: ['Datascience'],
		language: ['Python', 'R'],
		framework: undefined,
		styling: undefined,
		db: undefined,
		testingFramework: undefined,
		year: ['2020'],
	},
	{
		title: 'Face Detector',
		img: face_detector_gif,
		brief: 'Fullstack project, with API endpoints and login access',
		description: '',
		repo: 'https://github.com/jsantos42/faceDetector',
		field: ['Front End', 'Back End'],
		language: ['JavaScript'],
		framework: ['React.js', 'Node.js', 'Express.js'],
		styling: ['Styled Components'],
		db: ['PostgreSQL'],
		testingFramework: undefined,
		year: ['2022'],
	},
	{
		title: 'Online Booking',
		img: online_booking_gif,
		brief: 'Single Page Application to schedule appointments',
		description: '',
		repo: 'https://github.com/jsantos42/onlineBooking',
		field: ['Front End'],
		language: ['JavaScript'],
		framework: ['React.js'],
		styling: ['Styled Components'],
		db: undefined,
		testingFramework: undefined,
		year: ['2022'],
	},
	{
		title: 'Old portfolio',
		img: portfolio_gif,
		brief: 'My first portfolio website showcasing my main projects',
		description: '',
		repo: 'https://github.com/jsantos42/portfolio',
		field: ['Front End'],
		language: ['JavaScript'],
		framework: ['React.js'],
		styling: ['Styled Components'],
		db: undefined,
		testingFramework: undefined,
		year: ['2022'],
	},
	{
		title: 'Moves of Pokémons',
		img: pokemon_gif,
		brief: 'Searchable list, using AJAX requests and a public API',
		description: '',
		repo: 'https://github.com/jsantos42/MovesOfPokemons',
		field: ['Front End'],
		language: ['JavaScript'],
		framework: ['React.js'],
		styling: ['Styled Components'],
		db: undefined,
		testingFramework: undefined,
		year: ['2022'],
	},
	{
		title: 'Notepad',
		img: notepad_gif,
		brief: 'Simple desktop app made with Qt',
		description: '',
		repo: 'https://github.com/jsantos42/Qt/tree/main/Notepad',
		field: ['Front End'],
		language: ['C++'],
		framework: ['Qt'],
		styling: undefined,
		db: undefined,
		testingFramework: undefined,
		year: ['2022'],
	},
	{
		title: 'Minishell',
		img: minishell_gif,
		brief: 'A Unix shell, implemented with an Abstract Syntax Tree',
		description: '',
		repo: 'https://github.com/jsantos42/minishell',
		field: ['Low Level'],
		language: ['C'],
		framework: undefined,
		styling: undefined,
		db: undefined,
		testingFramework: undefined,
		year: ['2021'],
	},
	{
		title: 'Cub3D',
		img: cub3d_gif,
		brief: '3D maze using raycasting',
		description: '',
		repo: 'https://github.com/jsantos42/cub3d',
		field: ['Game Dev'],
		language: ['C'],
		framework: undefined,
		styling: undefined,
		db: undefined,
		testingFramework: undefined,
		year: ['2021'],
	},
	{
		title: 'So Long',
		img: so_long_gif,
		brief: '2D game, using textures and sprites',
		description: '',
		repo: 'https://github.com/jsantos42/so_long',
		field: ['Game Dev'],
		language: ['C'],
		framework: undefined,
		styling: undefined,
		db: undefined,
		testingFramework: undefined,
		year: ['2021'],
	},
	{
		title: 'Dining Philosophers',
		img: philo_gif,
		brief: 'Implementation of a concurrent algorithm, using threads',
		description: '',
		repo: 'https://github.com/jsantos42/Dining_Philosophers',
		field: ['Low Level'],
		language: ['C', 'C++'],
		framework: undefined,
		styling: undefined,
		db: undefined,
		testingFramework: undefined,
		year: ['2022'],
	},
];

export const fields: Field[] = [
	'Front End',
	'Back End',
	'Mobile',
	'Datascience',
	'Low Level',
	'Game Dev',
];

export const languages: ProgrammingLanguage[] = [
	'TypeScript',
	'JavaScript',
	'PHP',
	'Python',
	'R',
	'C',
	'C++',
];

export const frameworks: Framework[] = [
	'React.js',
	'Next.js',
	'React Native',
	'Node.js',
	'Express.js',
	'Laravel',
	'Qt',
];

export const stylingFrameworks: StylingFramework[] = [
	'Tailwind',
	'Styled Components',
	'CSS/SASS/LESS',
];

export const db: Database[] = ['MySQL', 'PostgreSQL'];

export const testingFrameworks: TestingFramework[] = ['PHPunit'];

const STARTING_YEAR = 2020;
const length = new Date().getFullYear() - STARTING_YEAR + 1;
export const years: string[] = Array.from(
	{ length: length },
	(_, index) => `${STARTING_YEAR + index}`
).sort((a, b) => (a < b ? 1 : -1));
