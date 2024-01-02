import { SupportedLocale } from '@/types';
import { useEffect } from 'react';
import { PageList } from '@/app/components/navigation/PageList';

export const NavModal = ({
	lang,
	toggleNavModal,
}: {
	lang: SupportedLocale;
	toggleNavModal: () => void;
}) => {
	const preventScroll = (e: Event) => {
		e.preventDefault();
	};

	useEffect(() => {
		// If a passive listener calls preventDefault(), the user agent will
		// do nothing other than generate a console warning. Since in this
		// case we do want it to preventDefault(), we need to pass that option
		window.addEventListener('touchmove', preventScroll, {
			passive: false,
		});
		window.addEventListener('wheel', preventScroll, { passive: false });

		return () => {
			// The scroll event is not cancelable, so we use the two ones below
			// to prevent scrolling (both with touch and with wheel/trackpad)
			window.removeEventListener('touchmove', preventScroll);
			window.removeEventListener('wheel', preventScroll);
		};
	});

	return (
		<div className="w-full h-full fixed flex justify-center bg-theme/90">
			<div className="w-10/12 h-full flex justify-center bg-theme pt-16">
				<PageList lang={lang} classes="text-center" toggle={toggle}/>
			</div>
		</div>
	);
};
