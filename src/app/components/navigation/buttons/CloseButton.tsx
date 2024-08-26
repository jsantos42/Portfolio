const CloseButtonSVG = () => (
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
		<line x1="13" y1="13" x2="35" y2="35" />
		<line x1="35" y1="13" x2="13" y2="35" />
	</svg>
);
export const CloseButton = ({ toggleModal }: { toggleModal: () => void }) => {
	return (
		<button onClick={toggleModal}>
			<CloseButtonSVG />
		</button>
	);
};
