import {getDictionaries, getSlug} from '@/dictionaries';
import React from 'react';
import {SupportedLocale} from '@/types';
import {TouchableLink} from '@/app/components/navigation/TouchableLink';

export const Logo = ({
						 lang,
						 toggleNavModal,
						 toggleLangModal,
						 isNavModalOpen,
						 isLangModalOpen,
					 }: {
	lang: SupportedLocale;
	toggleNavModal: () => void;
	toggleLangModal: () => void;
	isNavModalOpen: boolean;
	isLangModalOpen: boolean;
}) => {
	const {pages} = getDictionaries()[lang];
	const handleClick = () => {
		if (isNavModalOpen) {
			toggleNavModal();
		}
		else if (isLangModalOpen) {
			toggleLangModal();
		}
	}

	return (
		<>
			<TouchableLink
				href={getSlug(lang, pages.home)}
				onClick={handleClick}
			>
				Logo
				{/*<Image src={} alt={}*/}
			</TouchableLink>
		</>
	);
};
