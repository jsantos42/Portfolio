import { SupportedLocale } from '@src/types';
import { useEffect } from 'react';
import { preventScroll } from '@src/app/components/navigation/modals/utils';
import { getDictionaries, getSlug } from '@src/dictionaries';
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
		<div className="w-full h-full fixed flex justify-end bg-theme/90">
			<div
				className={`flex h-fit bg-theme gap-8 ${
					isMobile ? 'px-2 mr-[3.75rem]' : 'px-4'
				}`}
			>
				<ul className={''}>
					{locales.map(locale => (
						<li
							key={locale}
							className={lang === locale ? 'font-bold ' : ''}
						>
							<TouchableLink
								href={getSlug(locale, '')}
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
