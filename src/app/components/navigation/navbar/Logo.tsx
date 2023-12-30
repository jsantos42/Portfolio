import { getDictionaries, getSlug } from '@/dictionaries';
import React from 'react';
import { SupportedLocale } from '@/types';
import { TouchableLink } from '@/app/components/navigation/TouchableLink';

export const Logo = ({
	lang,
	toggle,
	isOpen,
}: {
	lang: SupportedLocale;
	toggle: () => void;
	isOpen: boolean;
}) => {
	const { pages } = getDictionaries()[lang];

	return (
		<>
			<TouchableLink
				href={getSlug(lang, pages.home)}
				onClick={isOpen ? toggle : undefined}
			>
				Logo
				{/*<Image src={} alt={}*/}
			</TouchableLink>
		</>
	);
};
