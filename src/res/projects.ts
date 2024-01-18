import online_shop_api_png from '@public/images/projects/online_shop_api.png';
import fast_food_gif from '@public/images/projects/fast_food.gif';
import face_detector_gif from '@public/images/projects/face_detector.gif';
import online_booking_gif from '@public/images/projects/online_booking.gif';
import portfolio_v1_gif from '@public/images/projects/portfolio_v1.gif';
import portfolio_v2_gif from '@public/images/projects/portfolio_v2.gif';
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
		title: 'Portfolio v2',
		img: portfolio_v2_gif,
		brief: {
			en: 'Personal website showcasing my projects and resume',
			fr: 'Portfolio personnel présentant mes projets et mon CV',
			pt: 'Website pessoal com os meus projectos e currículo',
		},
		repo: 'https://j-almeidasantos.engineer',
		field: ['Front End'],
		language: ['TypeScript'],
		framework: ['Next.js', 'React.js'],
		styling: ['Tailwind CSS'],
		db: undefined,
		testingFramework: undefined,
		date: ['2023-12'],
	},
	{
		title: 'Online Shop API',
		img: online_shop_api_png,
		brief: {
			en: 'API with OAuth2 authentication that sends confirmation emails to clients',
			fr: 'API avec authentification OAuth2 qui envoie des emails de confirmation aux clients',
			pt: 'API com autenticação OAuth2 que envia emails de confirmação aos clientes',
		},
		repo: 'https://github.com/jsantos42/OnlineShopAPI',
		field: ['Back End'],
		language: ['PHP'],
		framework: ['Laravel'],
		styling: undefined,
		db: ['MySQL'],
		testingFramework: ['PHPunit'],
		date: ['2023-09'],
	},
	{
		title: 'Fast-Food and Schools in Portugal',
		img: fast_food_gif,
		brief: {
			en: 'Datascience project to find out a potential geographical clustering',
			fr: 'Projet de datascience pour trouver un regroupement géographique potentiel',
			pt: 'Projecto de datascience para encontrar um potencial agrupamento geográfico',
		},
		repo: 'https://github.com/jsantos42/fast_food_and_schools_in_Portugal',
		field: ['Datascience'],
		language: ['Python', 'R'],
		framework: undefined,
		styling: undefined,
		db: undefined,
		testingFramework: undefined,
		date: ['2020-06'],
	},
	{
		title: 'Face Detector',
		img: face_detector_gif,
		brief: {
			en: 'Fullstack project, with API endpoints and login access',
			fr: 'Projet fullstack, avec des endpoints API et un accès de connexion',
			pt: 'Projecto fullstack, com API endpoints e acesso de login',
		},
		repo: 'https://github.com/jsantos42/faceDetector',
		field: ['Front End', 'Back End'],
		language: ['JavaScript'],
		framework: ['React.js', 'Node.js', 'Express.js'],
		styling: ['Styled Components'],
		db: ['PostgreSQL'],
		testingFramework: undefined,
		date: ['2022-06'],
	},
	{
		title: 'Online Booking',
		img: online_booking_gif,
		brief: {
			en: 'Single Page Application to schedule appointments',
			fr: 'Application Web Monopage pour planifier des rendez-vous',
			pt: 'Aplicação Web de Página Única para marcar consultas',
		},
		repo: 'https://github.com/jsantos42/onlineBooking',
		field: ['Front End'],
		language: ['JavaScript'],
		framework: ['React.js'],
		styling: ['Styled Components'],
		db: undefined,
		testingFramework: undefined,
		date: ['2022-08'],
	},
	{
		title: 'Portfolio v1',
		img: portfolio_v1_gif,
		brief: {
			en: 'My first portfolio website showcasing my main projects',
			fr: 'Mon premier site web de portfolio présentant mes principaux projets',
			pt: 'O meu primeiro website de portfólio com os meus principais projectos',
		},
		repo: 'https://github.com/jsantos42/portfolio_v1',
		field: ['Front End'],
		language: ['JavaScript'],
		framework: ['React.js'],
		styling: ['Styled Components'],
		db: undefined,
		testingFramework: undefined,
		date: ['2022-07'],
	},
	{
		title: 'Moves of Pokémons',
		img: pokemon_gif,
		brief: {
			en: 'Filterable list, using AJAX requests and a public API',
			fr: 'Liste filtrable, en utilisant des requêtes AJAX et une API publique',
			pt: 'Lista filtrável, utilizando pedidos AJAX e uma API pública',
		},
		repo: 'https://github.com/jsantos42/MovesOfPokemons',
		field: ['Front End'],
		language: ['JavaScript'],
		framework: ['React.js'],
		styling: ['Styled Components'],
		db: undefined,
		testingFramework: undefined,
		date: ['2022-05'],
	},
	{
		title: 'Notepad',
		img: notepad_gif,
		brief: {
			en: 'Simple desktop app made with Qt',
			fr: 'Application de bureau simple faite avec Qt',
			pt: 'Aplicação de desktop simples, feita com Qt',
		},
		repo: 'https://github.com/jsantos42/Qt/tree/main/Notepad',
		field: ['Front End'],
		language: ['C++'],
		framework: ['Qt'],
		styling: undefined,
		db: undefined,
		testingFramework: undefined,
		date: ['2022-03'],
	},
	{
		title: 'Minishell',
		img: minishell_gif,
		brief: {
			en: 'A Unix shell, implemented with an Abstract Syntax Tree',
			fr: 'Un shell Unix, implémenté avec un Arbre de la Syntaxe Abstraite',
			pt: 'Uma shell Unix, implementado com uma Árvore de Sintaxe Abstrata',
		},
		repo: 'https://github.com/jsantos42/minishell',
		field: ['Low Level'],
		language: ['C'],
		framework: undefined,
		styling: undefined,
		db: undefined,
		testingFramework: undefined,
		date: ['2021-10'],
	},
	{
		title: 'Cub3D',
		img: cub3d_gif,
		brief: {
			en: '3D maze using raycasting',
			fr: 'Labyrinthe 3D utilisant le raycasting',
			pt: 'Labirinto 3D usando raycasting',
		},
		repo: 'https://github.com/jsantos42/cub3d',
		field: ['Game Dev'],
		language: ['C'],
		framework: undefined,
		styling: undefined,
		db: undefined,
		testingFramework: undefined,
		date: ['2022-01'],
	},
	{
		title: 'So Long',
		img: so_long_gif,
		brief: {
			en: '2D game, using textures and sprites',
			fr: 'Jeu 2D, utilisant des textures et des sprites',
			pt: 'Jogo 2D, usando texturas e sprites',
		},
		repo: 'https://github.com/jsantos42/so_long',
		field: ['Game Dev'],
		language: ['C'],
		framework: undefined,
		styling: undefined,
		db: undefined,
		testingFramework: undefined,
		date: ['2021-08'],
	},
	{
		title: 'Dining Philosophers',
		img: philo_gif,
		brief: {
			en: 'Implementation of a concurrent algorithm, using threads',
			fr: "Implémentation d'un algorithme concurrent, en utilisant des threads",
			pt: 'Implementação de um algoritmo concorrente, usando threads',
		},
		repo: 'https://github.com/jsantos42/Dining_Philosophers',
		field: ['Low Level'],
		language: ['C', 'C++'],
		framework: undefined,
		styling: undefined,
		db: undefined,
		testingFramework: undefined,
		date: ['2021-09'],
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
	'Tailwind CSS',
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
