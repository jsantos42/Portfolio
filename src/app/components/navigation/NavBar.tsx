import { SupportedLocale } from '@src/types';
import { HamburgerMenu } from '@src/app/components/navigation/buttons/HamburgerMenu';
import { PageList } from '@src/app/components/navigation/PageList';
import { LanguageSwitcher } from '@src/app/components/navigation/buttons/LanguageSwitcher';

export const NavBar = ({
	lang,
	toggleNavModal,
	toggleLangModal,
	isNavModalOpen,
	isLangModalOpen,
	isMobile,
}: {
	lang: SupportedLocale;
	toggleNavModal: () => void;
	toggleLangModal: () => void;
	isNavModalOpen: boolean;
	isLangModalOpen: boolean;
	isMobile: boolean;
}) => {
	const languageSwitcher = () => (
		<LanguageSwitcher
			{...{
				lang,
				isLangModalOpen,
				toggleLangModal,
			}}
		/>
	);

	return (
		<nav
			className="w-full h-nav sticky top-0 z-40 px-4 flex justify-end
				items-center bg-theme antialiased"
		>
			<div className={`flex items-center gap-${isMobile ? '1' : '8'}`}>
				{isMobile ? (
					<>
						{languageSwitcher()}
						<HamburgerMenu
							{...{ isNavModalOpen, toggleNavModal }}
						/>
					</>
				) : (
					<>
						<PageList
							{...{
								lang,
								classes: 'flex gap-x-8 text-theme',
							}}
						/>
						{languageSwitcher()}
					</>
				)}
			</div>
		</nav>
	);
};
