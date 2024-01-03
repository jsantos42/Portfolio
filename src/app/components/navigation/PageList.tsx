import { TouchableLink } from '@src/app/components/navigation/TouchableLink';
import { getDictionaries, getSlug } from '@src/dictionaries';
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
	const { pages } = getDictionaries()[lang];
	const pagesNames = Object.values(pages).filter(name => name.length > 0);

	return (
		<ul className={classes}>
			{pagesNames.map(name => (
				<li key={name}>
					<TouchableLink href={getSlug(lang, name)} onClick={toggleNavModal}>
						{name}
					</TouchableLink>
				</li>
			))}
		</ul>
	);
};
