import { SupportedLocale } from '@/types';
import { getDictionaries, getSlug } from '@/dictionaries';
import { Logo } from '@/app/components/navigation/navbar/Logo';
import { HamburgerMenuButton } from '@/app/components/navigation/navbar/HamburgerMenuButton';
import { CloseButton } from '@/app/components/navigation/navbar/CloseButton';
import { TouchableLink } from '@/app/components/navigation/TouchableLink';

export const Navbar = ({
	lang,
	toggle,
	isOpen,
	isMobile,
}: {
	lang: SupportedLocale;
	toggle: () => void;
	isOpen: boolean;
	isMobile: boolean;
}) => {
	const { pages } = getDictionaries()[lang];
	const pagesNames = Object.values(pages).filter(name => name.length > 0);
	const button = () => {
		return isOpen ? (
			<CloseButton toggle={toggle} />
		) : (
			<HamburgerMenuButton toggle={toggle} />
		);
	};

	return (
		<>
			<div className="w-full h-nav bg-theme sticky top-0">
				<div className="px-4 h-full">
					<div className="flex justify-between items-center h-full">
						<Logo lang={lang} toggle={toggle} isOpen={isOpen} />
						{isMobile ? (
							button()
						) : (
							<ul className="flex gap-x-8 text-white">
								{pagesNames.map(name => (
									<li key={name}>
										<TouchableLink
											href={getSlug(lang, name)}
										>
											{name}
										</TouchableLink>
									</li>
								))}
							</ul>
						)}
					</div>
				</div>
			</div>
		</>
	);
};
