import { TouchableLink } from '@src/app/components/navigation/TouchableLink';
import {
	getDictionaries,
	getNewPathname,
	getSlug,
} from '@src/res/dictionaries';
import { Dictionary, Page, SupportedLocale } from '@src/types';
import { usePathname } from 'next/navigation';

export const PageList = ({
	lang,
	classes,
	toggleNavModal,
}: {
	lang: SupportedLocale;
	classes: string;
	toggleNavModal?: () => void;
}) => {
	const dict = getDictionaries()[lang];
	const dictionaryEntries = Object.entries(dict) as [
		Page,
		Dictionary[Page],
	][];
	const routeLabel = usePathname().split('/')[2];

	return (
		<ul className={classes}>
			{dictionaryEntries.map(([page, { pageName }]) => {
				return (
					<li
						key={pageName}
						className={`uppercase tracking-widest font-bold
							${getSlug(pageName) === routeLabel || 'opacity-50'}`}
					>
						<TouchableLink
							href={getNewPathname(lang, page)}
							onClick={toggleNavModal}
						>
							{pageName}
						</TouchableLink>
					</li>
				);
			})}
		</ul>
	);
};
