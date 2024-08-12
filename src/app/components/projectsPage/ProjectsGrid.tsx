import { Project, SupportedLocale } from '@src/types';
import React from 'react';
import { ProjectCard } from './projectCard/index';

export const ProjectsGrid = ({
	filteredSortedProjects,
	lang,
	isMobile,
}: {
	filteredSortedProjects: Project[];
	lang: SupportedLocale;
	isMobile: boolean;
}) => {
	const classes = `w-full pb-16 px-1 sm:px-8 grid grid-cols-projectsMobile
		min-[332px]:grid-cols-projects justify-items-center items-start gap-x-12
		gap-y-16 antialiased`;

	return (
		<div className={classes}>
			{filteredSortedProjects.map((project, index) => (
				<ProjectCard
					key={index}
					isMobile={isMobile}
					{...{ project, lang, index }}
				/>
			))}
		</div>
	);
};
