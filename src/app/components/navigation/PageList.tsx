import { TouchableLink } from '@src/app/components/navigation/TouchableLink';
import {
	getDictionaries,
	getNewPathname,
	getSlug,
} from '@src/res/dictionaries';
import { SupportedLocale } from '@src/types';
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
	const pages = Object.values(dict);
	const routeLabel = usePathname().split('/')[2];

	return (
		<ul className={classes}>
			{pages.map(({ pageName }) => {
				return (
					<li
						key={pageName}
						className={`uppercase tracking-widest font-bold
							${getSlug(pageName) === routeLabel || 'opacity-50'}`}
					>
						<TouchableLink
							href={getNewPathname(lang, pageName)}
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
