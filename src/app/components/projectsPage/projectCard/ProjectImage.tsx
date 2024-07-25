import { Project } from '@src/types';
import Image from 'next/image';

export const ProjectImage = ({ project }: { project: Project }) => (
	<Image
		src={project.img}
		alt={project.title}
		placeholder="empty"
		className="w-full aspect-16/10 row-start-2 row-end-6"
	/>
);
