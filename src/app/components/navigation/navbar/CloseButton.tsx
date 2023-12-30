export const CloseButton = ({ toggle }: { toggle: () => void }) => {
	return (
		<button onClick={toggle}>
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
				<line x1="10" y1="10" x2="38" y2="38" />
				<line x1="38" y1="10" x2="10" y2="38" />
			</svg>
		</button>
	);
};
