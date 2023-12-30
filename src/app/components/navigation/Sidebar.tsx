import { SupportedLocale } from '@/types';
import { getDictionaries, getSlug } from '@/dictionaries';
import { useEffect } from 'react';
import { TouchableLink } from '@/app/components/navigation/TouchableLink';

export const Sidebar = ({
	lang,
	toggle,
}: {
	lang: SupportedLocale;
	toggle: () => void;
}) => {
	const dict = getDictionaries()[lang];
	const pagesNames = Object.values(dict.pages).filter(
		name => name.length > 0
	);

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
				<ul className="text-center">
					{pagesNames.map(name => (
						<li key={name}>
							<TouchableLink
								href={getSlug(lang, name)}
								onClick={toggle}
							>
								{name}
							</TouchableLink>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};
