import { SupportedLocale } from '@/types';
import { useEffect } from 'react';
import { PageList } from '@/app/components/navigation/PageList';
import { preventScroll } from '@/app/components/navigation/modals/utils';

export const NavModal = ({
	lang,
	toggleNavModal,
}: {
	lang: SupportedLocale;
	toggleNavModal: () => void;
}) => {
	useEffect(preventScroll);

	return (
		<div className="w-full h-full fixed flex justify-center bg-theme/90">
			<div className="w-10/12 h-full flex justify-center bg-theme pt-16">
				<PageList
					{...{ lang, toggleNavModal, classes: 'text-center' }}
				/>
			</div>
		</div>
	);
};
