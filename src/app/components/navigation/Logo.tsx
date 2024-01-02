import { getDictionaries, getSlug } from '@/dictionaries';
import React from 'react';
import { SupportedLocale } from '@/types';
import { TouchableLink } from '@/app/components/navigation/TouchableLink';

export const Logo = ({
	lang,
	toggleNavModal,
	isNavModalOpen,
}: {
	lang: SupportedLocale;
	toggleNavModal: () => void;
	isNavModalOpen: boolean;
}) => {
	const { pages } = getDictionaries()[lang];

	return (
		<>
			<TouchableLink
				href={getSlug(lang, pages.home)}
				onClick={isNavModalOpen ? toggleNavModal : undefined}
			>
				Logo
				{/*<Image src={} alt={}*/}
			</TouchableLink>
		</>
	);
};
