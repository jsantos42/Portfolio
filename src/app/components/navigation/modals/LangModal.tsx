import { SupportedLocale } from '@src/types';
import { useEffect } from 'react';
import { preventScroll } from '@src/app/utils';
import { getDictionaries, getNewPathname } from '@src/res/dictionaries';
import { TouchableLink } from '@src/app/components/navigation/TouchableLink';

export const LangModal = ({
	lang,
	toggleLangModal,
	isMobile,
}: {
	lang: SupportedLocale;
	toggleLangModal: () => void;
	isMobile: boolean;
}) => {
	const locales = Object.keys(getDictionaries()) as SupportedLocale[];

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
							className={lang === locale ? 'font-bold ' : ''}
						>
							<TouchableLink
								href={getNewPathname(locale, '')}
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
