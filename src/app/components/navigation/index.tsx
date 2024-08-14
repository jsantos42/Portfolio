'use client';

import { createContext, useState } from 'react';
import { NavBar } from '@src/app/components/navigation/NavBar';
import { SupportedLocale } from '@src/types';
import { NavModal } from '@src/app/components/navigation/modals/NavModal';
import { LangModal } from '@src/app/components/navigation/modals/LangModal';
import { useMobileState } from '@src/app/utils';

export const ScreenTypeContext = createContext<null | boolean>(null);

export default function Navigation({ lang }: { lang: SupportedLocale }) {
	const [isNavModalOpen, setIsNavModalOpen] = useState(false);
	const [isLangModalOpen, setIsLangModalOpen] = useState(false);
	const isMobile = useMobileState(768, [
		{ callback: setIsNavModalOpen, args: false },
		{ callback: setIsLangModalOpen, args: false },
	]);

	const toggleNavModal = () => {
		setIsNavModalOpen(!isNavModalOpen);
		setIsLangModalOpen(false);
	};

	const toggleLangModal = () => {
		setIsLangModalOpen(!isLangModalOpen);
		setIsNavModalOpen(false);
	};

	return (
		<ScreenTypeContext.Provider value={isMobile}>
			<NavBar
				{...{
					lang,
					toggleNavModal,
					toggleLangModal,
					isNavModalOpen,
					isLangModalOpen,
				}}
			/>
			{isNavModalOpen ? <NavModal {...{ lang, toggleNavModal }} /> : null}
			{isLangModalOpen ? (
				<LangModal {...{ lang, toggleLangModal }} />
			) : null}
		</ScreenTypeContext.Provider>
	);
}
