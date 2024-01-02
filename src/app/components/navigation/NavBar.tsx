import { SupportedLocale } from '@/types';
import { Logo } from '@/app/components/navigation/Logo';
import { HamburgerMenu } from '@/app/components/navigation/buttons/HamburgerMenu';
import { PageList } from '@/app/components/navigation/PageList';

export const NavBar = ({
	lang,
	toggleNavModal,
	isNavModalOpen,
	isMobile,
}: {
	lang: SupportedLocale;
	toggleNavModal: () => void;
	isNavModalOpen: boolean;
	isMobile: boolean;
}) => {
	return (
		<>
			<div className="w-full h-nav bg-theme sticky top-0">
				<div className="px-4 h-full">
					<div className="flex justify-between items-center h-full">
						<Logo {...{ lang, isNavModalOpen, toggleNavModal }} />
						<div
							className={`flex items-center ${
								isMobile ? 'gap-1' : 'gap-8'
							}`}
						>
							{isMobile ? (
								<>
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
								</>
							)}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
