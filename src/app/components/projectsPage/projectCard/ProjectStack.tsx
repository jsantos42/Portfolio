import { Project } from '@src/types';

export const ProjectStack = ({ project }: { project: Project }) => {
	const classes = `row-start-1 flex flex-wrap justify-center
						gap-x-3 text-sm font-semibold text-primary tracking-wide`;

	const stackFlatArray = [
		...(project.language ?? []),
		...(project.framework ?? []),
		...(project.testingFramework ?? []),
		...(project.styling ?? []),
		...(project.db ?? []),
	];

	return (
		<ul className={classes}>
			{stackFlatArray.map((i, index) => (
				<li key={index}>{i}</li>
			))}
		</ul>
	);
};
