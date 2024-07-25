import { Project, SupportedLocale } from '@src/types';

export const ProjectBrief = ({
	project,
	lang,
}: {
	project: Project;
	lang: SupportedLocale;
}) => {
	const classes = `text-sm text-center text-themeHighlight
							row-start-2 row-end-4 self-start leading-relaxed`;

	return <p className={classes}>{project.brief[lang]}</p>;
};
