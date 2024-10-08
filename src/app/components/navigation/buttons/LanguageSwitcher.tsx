import { SupportedLocale } from '@src/types';
import { CloseButton } from '@src/app/components/navigation/buttons/CloseButton';

const GlobeSVG = () => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={25}
		height={25}
		fill="rgba(var(--foreground-rgb))"
		viewBox="0 0 24 24"
	>
		<path d="M12 24C5.4 24 0 18.6 0 12S5.4 0 12 0s12 5.4 12 12-5.4 12-12 12zm-2.5-7c.6 3.1 1.7 5 2.5 5s1.9-1.9 2.5-5h-5zm7.1 0c-.3 1.7-.8 3.3-1.4 4.5 2.3-.8 4.3-2.4 5.5-4.5h-4.1zM3.3 17c1.2 2.1 3.2 3.7 5.5 4.5-.6-1.2-1.1-2.8-1.4-4.5H3.3zm13.6-2h4.7c.2-.9.4-2 .4-3s-.2-2.1-.5-3h-4.7c.2 1 .2 2 .2 3s0 2-.1 3zm-7.7 0h5.7c.1-.9.2-1.9.2-3s-.1-2.1-.2-3H9.2c-.1.9-.2 1.9-.2 3s.1 2.1.2 3zm-6.7 0h4.7c-.1-1-.1-2-.1-3s0-2 .1-3H2.5c-.3.9-.5 2-.5 3s.2 2.1.5 3zm14.1-8h4.1c-1.2-2.1-3.2-3.7-5.5-4.5.6 1.2 1.1 2.8 1.4 4.5zM9.5 7h5.1c-.6-3.1-1.7-5-2.5-5s-2 1.9-2.6 5zM3.3 7h4.1c.3-1.7.8-3.3 1.4-4.5-2.3.8-4.2 2.4-5.5 4.5z" />
	</svg>
);

export const LanguageSwitcher = ({
	lang,
	isLangModalOpen,
	toggleLangModal,
}: {
	lang: SupportedLocale;
	isLangModalOpen: boolean;
	toggleLangModal: () => void;
}) => {
	if (isLangModalOpen) {
		return <CloseButton toggleModal={toggleLangModal} />;
	}
	return (
		<button
			onClick={toggleLangModal}
			className="w-12 h-12 flex justify-center items-center"
		>
			<GlobeSVG />
		</button>
	);
};
