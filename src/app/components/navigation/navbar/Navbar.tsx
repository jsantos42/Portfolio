import { SupportedLocale } from '@/types';
import { getDictionaries } from '@/dictionaries';
import { Logo } from '@/app/components/navigation/navbar/Logo';
import { HamburgerMenuButton } from '@/app/components/navigation/navbar/HamburgerMenuButton';
import { CloseButton } from '@/app/components/navigation/navbar/CloseButton';
import { PageList } from '@/app/components/navigation/PageList';

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
						{isMobile
							? button()
							: <PageList
								lang={lang}
								classes={'flex gap-x-8 text-white'}
							/>
						}
					</div>
				</div>
			</div>
		</>
	);
};
