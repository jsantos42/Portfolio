import { Project } from '@src/types';

export const ProjectTitle = ({ project }: { project: Project }) => (
	<h2 className="text-lg font-semibold tracking-wide text-themeHighlight">
		{project.title}
	</h2>
);
