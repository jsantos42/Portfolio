import { Project } from '@src/types';
import Image from 'next/image';
import { TouchableLink } from '@src/app/components/navigation/TouchableLink';

export const ProjectsGrid = ({
	filteredProjects,
	display,
}: {
	filteredProjects: Project[];
	display: boolean;
}) => (
	<div
		className="w-full pb-16 px-1 sm:px-8 grid grid-cols-projectsMobile
		min-[332px]:grid-cols-projects justify-items-center gap-12"
	>
		{filteredProjects.map(project => (
			<div
				key={project.title}
				className="min-w-[248px] min-[332px]:min-w-[324px] max-w-[500px]
				px-3 py-4 flex flex-wrap flex-col justify-center items-center
				gap-y-4 hover:bg-highlight rounded-xl"
			>
				<h2 className="font-semibold">{project.title}</h2>
				<Image
					src={project.img}
					alt={project.title}
					className="w-full"
				/>
				<div className="mt-2 flex flex-col gap-y-2">
					<ul className="flex flex-wrap justify-center gap-2 text-xs text-primary">
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
					<p className="font-semibold">{project.brief}</p>
					<p>{project.field}</p>
					<p>{project.year}</p>
					<p>
						<TouchableLink href={project.repo} inNewWindow={true}>
							Repository
						</TouchableLink>
					</p>
				</div>
			</div>
		))}
	</div>
);
