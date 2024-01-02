import { SupportedLocale } from '@/types';
import { Logo } from '@/app/components/navigation/Logo';
import { HamburgerMenu } from '@/app/components/navigation/buttons/HamburgerMenu';
import { PageList } from '@/app/components/navigation/PageList';
import { LanguageSwitcher } from '@/app/components/navigation/buttons/LanguageSwitcher';

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
	const languageSwitcher = () => {
		return (
			<LanguageSwitcher
				{...{
					lang,
					isLangModalOpen,
					toggleLangModal,
				}}
			/>
		);
	};
	return (
		<>
			<div className="w-full h-nav bg-theme sticky top-0">
				<div className="px-4 h-full">
					<div className="flex justify-between items-center h-full">
						<Logo
							{...{
								lang,
								toggleNavModal,
								toggleLangModal,
								isNavModalOpen,
								isLangModalOpen,
							}}
						/>
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
