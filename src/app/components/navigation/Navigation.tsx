'use client';

import { useEffect, useState } from 'react';
import { NavBar } from '@src/app/components/navigation/NavBar';
import { SupportedLocale } from '@src/types';
import { NavModal } from '@src/app/components/navigation/modals/NavModal';
import { LangModal } from '@src/app/components/navigation/modals/LangModal';

export const Navigation = ({ lang }: { lang: SupportedLocale }) => {
	const MOBILE_THRESHOLD = 768;
	const [isMobile, setIsMobile] = useState(
		window.innerWidth < MOBILE_THRESHOLD
	);
	const [isNavModalOpen, setIsNavModalOpen] = useState(false);
	const [isLangModalOpen, setIsLangModalOpen] = useState(false);

	const toggleNavModal = () => {
		setIsNavModalOpen(!isNavModalOpen);
		setIsLangModalOpen(false);
	};

	const toggleLangModal = () => {
		setIsLangModalOpen(!isLangModalOpen);
		setIsNavModalOpen(false);
	};

	useEffect(() => {
		const handleResizing = (e: UIEvent) => {
			const width = (e.target as Window).innerWidth;
			const shouldBeMobile = width < MOBILE_THRESHOLD;
			if (shouldBeMobile !== isMobile) {
				setIsMobile(shouldBeMobile);
				setIsNavModalOpen(false);
				setIsLangModalOpen(false);
			}
		};

		window.addEventListener('resize', handleResizing);

		// Cleanup function of useEffect(). In this case, it removes the event
		// listener when the component unmounts, to prevent memory leaks
		return () => {
			window.removeEventListener('resize', handleResizing);
		};
	});

	return (
		<>
			<NavBar
				{...{
					lang,
					toggleNavModal,
					toggleLangModal,
					isNavModalOpen,
					isLangModalOpen,
					isMobile,
				}}
			/>
			{isNavModalOpen ? <NavModal {...{ lang, toggleNavModal }} /> : null}
			{isLangModalOpen ? (
				<LangModal {...{ lang, toggleLangModal, isMobile }} />
			) : null}
		</>
	);
};
