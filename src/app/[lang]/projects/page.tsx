'use client';
import { PageParams } from '@src/types';
import { getDictionaries, getSlug } from '@src/res/dictionaries';
import Link from 'next/link';
import { useState } from 'react';
import { projects } from '@src/res/projects';
import { ProjectsGrid } from '@src/app/components/projects/ProjectsGrid';

export default function Projects({ params }: { params: PageParams }) {
	const dict  = getDictionaries()[params.lang];
	const [filteread, setFiltered] = useState();
	const searchField = '';
	const filteredProjects = projects;

	return (
		<>
			<h1>{dict.projects.pageName}</h1>
			<ProjectsGrid {...{ filteredProjects }} />
			<Link href={getSlug(params.lang, dict.about.pageName)}>
				Go to {dict.about.pageName}
			</Link>
		</>
	);
}

