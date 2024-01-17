import { Project } from '@src/types';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export const ProjectsGrid = ({
	filteredSortedProjects,
}: {
	filteredSortedProjects: Project[];
}) => (
	<div
		className="w-full pb-16 px-1 sm:px-8 grid grid-cols-projectsMobile
		min-[332px]:grid-cols-projects justify-items-center items-start gap-x-12
		gap-y-16 antialiased"
	>
		{filteredSortedProjects.map(project => (
			<Link
				key={project.title}
				rel={'no-referrer'}
				target={'_blank'}
				href={project.repo}
			>
				<div
					key={project.title}
					className="min-w-[248px] min-[332px]:min-w-[324px]
					max-w-[500px] max-h-[550px] px-3 py-4 flex flex-wrap
					flex-col gap-y-4 justify-center items-center self-start
					hover:bg-highlight rounded-xl"
				>
					<h2 className="text-lg font-semibold">
						{project.title}
					</h2>
					<Image
						src={project.img}
						alt={project.title}
						placeholder="empty"
						className="w-full aspect-16/10 row-start-2 row-end-6"
					/>
					<div
						className="grid grid-rows-projects gap-y-2
					items-center"
					>
						<ul
							className="row-start-1 flex flex-wrap justify-center
						gap-x-2 text-sm font-semibold text-primary"
						>
							{[
								...(project.language ?? []),
								...(project.framework ?? []),
								...(project.testingFramework ?? []),
								...(project.styling ?? []),
								...(project.db ?? []),
							].map((i, index) => (
								<li key={index}>{i}</li>
							))}
						</ul>
						<p
							className="text-center text-sm row-start-2 row-end-4
						self-start leading-relaxed"
						>
							{project.brief}
						</p>
					</div>
				</div>
			</Link>
		))}
	</div>
);
