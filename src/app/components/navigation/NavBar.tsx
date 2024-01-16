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
		<>
			<div className="w-full h-nav bg-theme sticky top-0 z-40 antialiased">
				<div className="px-4 h-full">
					<div className="flex justify-end items-center h-full">
						<div
							className={`flex items-center ${
								isMobile ? 'gap-1' : 'gap-8'
							}`}
						>
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
					</div>
				</div>
			</div>
		</>
	);
};
