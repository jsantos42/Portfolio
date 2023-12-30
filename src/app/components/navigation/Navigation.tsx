'use client';

import { useEffect, useState } from 'react';
import { Navbar } from '@/app/components/navigation/navbar/Navbar';
import { SupportedLocale } from '@/types';
import { Sidebar } from '@/app/components/navigation/Sidebar';

export const Navigation = ({ lang }: { lang: SupportedLocale }) => {
	const MOBILE_THRESHOLD = 768;
	const [isMobile, setIsMobile] = useState(
		window.innerWidth < MOBILE_THRESHOLD
	);
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => {
		setIsOpen(!isOpen);
	};

	useEffect(() => {
		const handleResizing = (e: UIEvent) => {
			const width = (e.target as Window).innerWidth;
			const shouldBeMobile = width < MOBILE_THRESHOLD;
			if (shouldBeMobile !== isMobile) {
				setIsMobile(shouldBeMobile);
				setIsOpen(false);
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
			<Navbar
				lang={lang}
				toggle={toggle}
				isOpen={isOpen}
				isMobile={isMobile}
			/>
			{isOpen ? <Sidebar lang={lang} toggle={toggle} /> : null}
		</>
	);
};
