'use client';
import { PageParams } from '@src/types';
import { getDictionaries, getSlug } from '@src/dictionaries';
import Link from 'next/link';
import { useState } from 'react';
import { TouchableLink } from '@src/app/components/navigation/TouchableLink';
import Image from "next/image";
import cub3d_gif from '@public/images/projects/cub3d.gif';
import face_detector_gif from '@public/images/projects/face_detector.gif';
import fast_food_gif from '@public/images/projects/fast_food.gif';
import minishell_gif from '@public/images/projects/minishell.gif';
import notepad_gif from '@public/images/projects/notepad.gif';
import online_booking_gif from '@public/images/projects/online_booking.gif';
import online_shop_api_png from '@public/images/projects/online_shop_api.png';
import philo_gif from '@public/images/projects/philo.gif';
import pokemon_gif from '@public/images/projects/pokemon.gif';
import portfolio_gif from '@public/images/projects/portfolio.gif';
import so_long_gif from '@public/images/projects/so_long.gif';

export default function Projects({ params }: { params: PageParams }) {
	const { pages } = getDictionaries()[params.lang];
	const [filteread, setFiltered] = useState();
	const searchField = '';
	const filteredProjects = projects;

	return (
		<>
			<h1>{pages.projects}</h1>
			<div className="grid grid-cols-projectsMobile min-[470px]:grid-cols-projects gap-20 px-4 sm:px-8 py-16">
			{filteredProjects.map(project => (
				<div key={project.title} className="flex flex-wrap flex-col justify-center items-center gap-y-4">
					<h2 className="font-semibold">{project.title}</h2>
					<div className="min-w-[248px] min-[470px]:min-w-[280px] max-w-[500px]">
						<Image src={project.img}  alt={project.title} className="w-full"/>
						<div className="flex flex-col gap-y-2 mt-2">
							<p >
								<strong>{project.brief}</strong>
							</p>
							<p >
								Stack:{' '}
								<strong>{project.languages.join(', ')}</strong>
							</p>
							<p>
								<TouchableLink
									href={project.repo}
									inNewWindow={true}
								>
									Repository
								</TouchableLink>
							</p>
						</div>
					</div>
				</div>
			))}
			</div>
			<Link href={getSlug(params.lang, pages.about)}>
				Go to {pages.about}
			</Link>
		</>
	);
}

const projects = [
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
