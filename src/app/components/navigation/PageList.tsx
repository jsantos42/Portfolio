import { TouchableLink } from '@src/app/components/navigation/TouchableLink';
import { getDictionaries, getNewPathname } from '@src/res/dictionaries';
import { SupportedLocale } from '@src/types';

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

	return (
		<ul className={classes}>
			{pages.map(page => (
				<li key={page.pageName}>
					<TouchableLink
						href={getNewPathname(lang, page.pageName)}
						onClick={toggleNavModal}
					>
						{page.pageName}
					</TouchableLink>
				</li>
			))}
		</ul>
	);
};
