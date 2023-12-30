import { TouchableLink } from '@/app/components/navigation/TouchableLink';
import { getDictionaries, getSlug } from '@/dictionaries';
import { SupportedLocale } from '@/types';

export const PageList = ({
	lang,
	classes,
	toggle,
}: {
	lang: SupportedLocale;
	classes: string;
	toggle?: () => void;
}) => {
	const { pages } = getDictionaries()[lang];
	const pagesNames = Object.values(pages).filter(name => name.length > 0);

	return (
		<ul className={classes}>
			{pagesNames.map(name => (
				<li key={name}>
					<TouchableLink href={getSlug(lang, name)} onClick={toggle}>
						{name}
					</TouchableLink>
				</li>
			))}
		</ul>
	);
};
