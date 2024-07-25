import { Project, SupportedLocale } from '@src/types';
import Link from 'next/link';
import { ProjectStack } from './ProjectStack';
import { ProjectBrief } from './ProjectBrief';
import { ProjectTitle } from './ProjectTitle';
import { ProjectImage } from './ProjectImage';

export const ProjectCard = ({
	project,
	lang,
}: {
	project: Project;
	lang: SupportedLocale;
}) => (
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
					hover:bg-highlight rounded-xl hover:shadow-grid"
		>
			<ProjectTitle {...{ project }} />
			<ProjectImage {...{ project }} />
			<div className="grid grid-rows-projects gap-y-2 items-center">
				<ProjectStack {...{ project }} />
				<ProjectBrief {...{ project, lang }} />
			</div>
		</div>
	</Link>
);
