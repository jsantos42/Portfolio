import { TouchableLink } from '@src/app/components/navigation/TouchableLink';
import { getDictionaries, getSlug } from '@src/res/dictionaries';
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
	const pages = Object.values(dict).filter(page => page.pageName.length > 0);

	return (
		<ul className={classes}>
			{pages.map(page => (
				<li key={page.pageName}>
					<TouchableLink
						href={getSlug(lang, page.pageName)}
						onClick={toggleNavModal}
					>
						{page.pageName}
					</TouchableLink>
				</li>
			))}
		</ul>
	);
};
