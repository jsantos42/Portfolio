'use client';

import dynamic from 'next/dynamic';

const ProjectsPage = dynamic(() => import('@src/app/components/projectsPage'), {
	ssr: false,
});

export default ProjectsPage;
