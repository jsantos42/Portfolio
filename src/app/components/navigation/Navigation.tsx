'use client';

import { useEffect, useState } from 'react';
import { NavBar } from '@/app/components/navigation/NavBar';
import { SupportedLocale } from '@/types';
import { NavModal } from '@/app/components/navigation/NavModal';

export const Navigation = ({ lang }: { lang: SupportedLocale }) => {
	const MOBILE_THRESHOLD = 768;
	const [isMobile, setIsMobile] = useState(
		window.innerWidth < MOBILE_THRESHOLD
	);
	const [isNavModalOpen, setIsNavModalOpen] = useState(false);

	const toggleNavModal = () => {
		setIsNavModalOpen(!isNavModalOpen);
	};

	useEffect(() => {
		const handleResizing = (e: UIEvent) => {
			const width = (e.target as Window).innerWidth;
			const shouldBeMobile = width < MOBILE_THRESHOLD;
			if (shouldBeMobile !== isMobile) {
				setIsMobile(shouldBeMobile);
				setIsNavModalOpen(false);
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
					isNavModalOpen,
					isMobile,
				}}
			/>
			{isNavModalOpen ? <NavModal {...{ lang, toggleNavModal }} /> : null}
		</>
	);
};
