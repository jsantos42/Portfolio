import { Page, SupportedLocale } from '@src/types';
import { useEffect } from 'react';
import { preventScroll } from '@src/app/utils';
import {
	getDictionaries,
	getNewPathname,
	getSlug,
} from '@src/res/dictionaries';
import { TouchableLink } from '@src/app/components/navigation/TouchableLink';
import { usePathname } from 'next/navigation';

export const LangModal = ({
	lang,
	toggleLangModal,
	isMobile,
}: {
	lang: SupportedLocale;
	toggleLangModal: () => void;
	isMobile: boolean;
}) => {
	const dictionaries = getDictionaries();
	const locales = Object.keys(dictionaries) as SupportedLocale[];
	const dict = dictionaries[lang];
	const currentRouteLabel = usePathname().split('/')[2];

	const currentPage = Object.entries(dict).find(
		([page, { pageName }]) => getSlug(pageName) === currentRouteLabel
	)?.[0] as Page;

	useEffect(preventScroll);

	return (
		<div className="w-full h-full fixed z-30 flex justify-end bg-theme/90 animate-fadeInFromTop">
			<div
				className={`flex h-fit bg-theme gap-8 ${
					isMobile ? 'w-full justify-center py-16' : 'px-4'
				}`}
			>
				<ul className={''}>
					{locales.map(locale => (
						<li
							key={locale}
							className={`uppercase tracking-widest font-bold
							${locale === lang || 'opacity-50'}`}
						>
							<TouchableLink
								href={getNewPathname(
									locale,
									currentPage || 'home'
								)}
								onClick={toggleLangModal}
							>
								{locale.toLocaleUpperCase()}
							</TouchableLink>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};
