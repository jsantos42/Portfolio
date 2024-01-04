'use client';
import { PageParams } from '@src/types';
import { getDictionaries, getSlug } from '@src/res/dictionaries';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { ProjectsFilter } from '@src/app/components/projects/ProjectsFilter';
import { projects } from '@src/res/projects';
import { ProjectsGrid } from '@src/app/components/projects/ProjectsGrid';

export default function Projects({ params }: { params: PageParams }) {
	const dict = getDictionaries()[params.lang];
	const [filteread, setFiltered] = useState();
	const searchField = '';
	const filteredProjects = projects;

	const MOBILE_THRESHOLD = 768; // CHANGE THIS
	const [isMobile, setIsMobile] = useState(
		window.innerWidth < MOBILE_THRESHOLD
	);
	const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);

	const toggleFilterModal = () => {
		setIsFilterModalOpen(!isFilterModalOpen);
	};

	// consider extract duplicated code from Navigation.tsx
	useEffect(() => {
		const handleResizing = (e: UIEvent) => {
			const width = (e.target as Window).innerWidth;
			const shouldBeMobile = width < MOBILE_THRESHOLD;
			if (shouldBeMobile !== isMobile) {
				setIsMobile(shouldBeMobile);
				setIsFilterModalOpen(false);
			}
		};

		window.addEventListener('resize', handleResizing);

		// Cleanup function of useEffect(). In this case, it removes the event
		// listener when the component unmounts, to prevent memory leaks
		return () => {
			window.removeEventListener('resize', handleResizing);
		};
	});

	return (
		<>
			{/*<h1>{dict.projects.pageName}</h1>*/}
			{isMobile ? (
				<button onClick={toggleFilterModal}>Toggle</button>
			) : null}
			<div className="flex">
				{!isMobile || isFilterModalOpen ? (
					<ProjectsFilter content={dict.projects.pageContent} />
				) : null}
				<ProjectsGrid {...{ filteredProjects }} />
			</div>
			<Link href={getSlug(params.lang, dict.about.pageName)}>
				Go to {dict.about.pageName}
			</Link>
		</>
	);
}
