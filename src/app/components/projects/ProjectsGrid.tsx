import { Project } from '@src/types';
import Image from 'next/image';
import { TouchableLink } from '@src/app/components/navigation/TouchableLink';

export const ProjectsGrid = ({
	filteredProjects,
}: {
	filteredProjects: Project[];
}) => (
	<div className="grid grid-cols-projectsMobile min-[470px]:grid-cols-projects gap-20 px-4 sm:px-8 py-16 flex-grow">
		{filteredProjects.map(project => (
			<div
				key={project.title}
				className="flex flex-wrap flex-col justify-center items-center gap-y-4"
			>
				<h2 className="font-semibold">{project.title}</h2>
				<div className="min-w-[248px] min-[470px]:min-w-[280px] max-w-[500px]">
					<Image
						src={project.img}
						alt={project.title}
						className="w-full"
					/>
					<div className="flex flex-col gap-y-2 mt-2">
						<p>
							<strong>{project.brief}</strong>
						</p>
						<p>
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
);
