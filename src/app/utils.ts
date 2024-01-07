import { useEffect, useState } from 'react';

export const useMobileState = (
	windowThreshold: number,
	otherCallbacks: { callback: (...arg: any[]) => void; args: any }[]
) => {
	const [isMobile, setIsMobile] = useState(
		window.innerWidth < windowThreshold
	);

	useEffect(() => {
		const handleResizing = (e: UIEvent) => {
			const width = (e.target as Window).innerWidth;
			const shouldBeMobile = width < windowThreshold;
			if (shouldBeMobile !== isMobile) {
				setIsMobile(shouldBeMobile);
				otherCallbacks.map(({ callback, args }) => callback(args));
			}
		};

		window.addEventListener('resize', handleResizing);

		// Cleanup function of useEffect(). In this case, it removes the event
		// listener when the component unmounts, to prevent memory leaks
		return () => {
			window.removeEventListener('resize', handleResizing);
		};
	});
	return isMobile;
};
