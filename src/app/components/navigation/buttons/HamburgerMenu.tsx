import { CloseButton } from '@/app/components/navigation/buttons/CloseButton';

export const HamburgerMenu = ({
	isNavModalOpen,
	toggleNavModal,
}: {
	isNavModalOpen: boolean;
	toggleNavModal: () => void;
}) => {
	if (isNavModalOpen) {
		return <CloseButton toggleModal={toggleNavModal} />;
	}
	return (
		<button onClick={toggleNavModal}>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="48"
				height="48"
				style={{
					stroke: 'rgba(var(--foreground-rgb))',
					strokeWidth: 2,
					strokeLinecap: 'round',
				}}
			>
				<line x1="10" y1="15" x2="38" y2="15" />
				<line x1="10" y1="24" x2="38" y2="24" />
				<line x1="10" y1="33" x2="38" y2="33" />
			</svg>
		</button>
	);
};
