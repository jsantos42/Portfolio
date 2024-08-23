import online_shop_api_png from '@public/images/projects/online_shop_api.png';
import fast_food_png from '@public/images/projects/fast_food.png';
import fast_food_gif from '@public/images/projects/fast_food.gif';
import face_detector_png from '@public/images/projects/face_detector.png';
import face_detector_gif from '@public/images/projects/face_detector.gif';
import online_booking_png from '@public/images/projects/online_booking.png';
import online_booking_gif from '@public/images/projects/online_booking.gif';
import portfolio_v1_png from '@public/images/projects/portfolio_v1.png';
import portfolio_v1_gif from '@public/images/projects/portfolio_v1.gif';
import portfolio_v2_png from '@public/images/projects/portfolio_v2.png';
import portfolio_v2_gif from '@public/images/projects/portfolio_v2.gif';
import bi_dashboard_png from '@public/images/projects/bi_dashboard.png';
import bi_dashboard_gif from '@public/images/projects/bi_dashboard.gif';
import pokemon_png from '@public/images/projects/pokemon.png';
import pokemon_gif from '@public/images/projects/pokemon.gif';
import notepad_png from '@public/images/projects/notepad.png';
import notepad_gif from '@public/images/projects/notepad.gif';
import minishell_png from '@public/images/projects/minishell.png';
import minishell_gif from '@public/images/projects/minishell.gif';
import cub3d_png from '@public/images/projects/cub3d.png';
import cub3d_gif from '@public/images/projects/cub3d.gif';
import so_long_png from '@public/images/projects/so_long.png';
import so_long_gif from '@public/images/projects/so_long.gif';
import philo_png from '@public/images/projects/philo.png';
import philo_gif from '@public/images/projects/philo.gif';
import flashcards_png from '@public/images/projects/flashcards.png';
import flashcards_gif from '@public/images/projects/flashcards.gif';
import groceries_png from '@public/images/projects/groceries.png';
import groceries_gif from '@public/images/projects/groceries.gif';
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
		title: 'Groceries App',
		staticImg: groceries_png,
		gif: groceries_gif,
		brief: {
			en: 'Mobile app for a groceries list, featuring autocomplete',
			fr: 'Application mobile pour une liste de courses, avec saisie semi-automatique',
			pt: 'Aplicação móvel para uma lista de compras, com preenchimento automático',
		},
		repo: 'https://github.com/jsantos42/GroceriesApp',
		field: ['Front End', 'Mobile'],
		language: ['TypeScript'],
		framework: ['React Native'],
		styling: ['Tailwind CSS'],
		db: undefined,
		testingFramework: undefined,
		date: ['2024-08'],
	},
	{
		title: 'Flashcards',
		staticImg: flashcards_png,
		gif: flashcards_gif,
		brief: {
			en: 'Flashcards app to help memorize information',
			fr: 'Application de cartes mémoire',
			pt: 'Aplicação de flashcards',
		},
		repo: 'https://github.com/jsantos42/flashcards',
		field: ['Front End', 'Back End'],
		language: ['TypeScript'],
		framework: ['Next.js', 'React.js', 'Node.js', 'Express.js'],
		styling: ['Tailwind CSS'],
		db: ['MySQL'],
		testingFramework: ['Jest'],
		date: ['2024-04'],
	},
	{
		title: 'Portfolio v2',
		staticImg: portfolio_v2_png,
		gif: portfolio_v2_gif,
		brief: {
			en: 'Personal website showcasing my projects and resume',
			fr: 'Portfolio personnel présentant mes projets et mon CV',
			pt: 'Website pessoal com os meus projectos e currículo',
		},
		repo: 'https://github.com/jsantos42/portfolio',
		field: ['Front End'],
		language: ['TypeScript'],
		framework: ['Next.js', 'React.js'],
		styling: ['Tailwind CSS'],
		db: undefined,
		testingFramework: undefined,
		date: ['2023-12'],
	},
	{
		title: 'BI Dashboard',
		staticImg: bi_dashboard_png,
		gif: bi_dashboard_gif,
		brief: {
			en: 'Dashboard with several charts made with Chart.js and ApexCharts',
			fr: 'Tableau de bord avec plusieurs graphiques réalisés avec Chart.js et ApexCharts',
			pt: 'Dashboard com vários gráficos feitos com Chart.js e ApexCharts',
		},
		repo: 'https://github.com/jsantos42/bi_dashboard',
		field: ['Front End'],
		language: ['TypeScript'],
		framework: ['Next.js', 'React.js'],
		styling: ['Tailwind CSS'],
		db: undefined,
		testingFramework: undefined,
		date: ['2024-01'],
	},
	{
		title: 'Online Shop API',
		staticImg: online_shop_api_png,
		// no gif available
		gif: online_shop_api_png,
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
		staticImg: fast_food_png,
		gif: fast_food_gif,
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
		staticImg: face_detector_png,
		gif: face_detector_gif,
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
		staticImg: online_booking_png,
		gif: online_booking_gif,
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
		staticImg: portfolio_v1_png,
		gif: portfolio_v1_gif,
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
		staticImg: pokemon_png,
		gif: pokemon_gif,
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
		staticImg: notepad_png,
		gif: notepad_gif,
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
		staticImg: minishell_png,
		gif: minishell_gif,
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
		staticImg: cub3d_png,
		gif: cub3d_gif,
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
		staticImg: so_long_png,
		gif: so_long_gif,
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
		staticImg: philo_png,
		gif: philo_gif,
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

export const testingFrameworks: TestingFramework[] = ['PHPunit', 'Jest'];

const STARTING_YEAR = 2020;
const length = new Date().getFullYear() - STARTING_YEAR + 1;
export const years: string[] = Array.from(
	{ length: length },
	(_, index) => `${STARTING_YEAR + index}`
).sort((a, b) => (a < b ? 1 : -1));
