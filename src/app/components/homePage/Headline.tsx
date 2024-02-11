export const Headline = ({ text }: { text: string }) =>
	text.split('|').map((str, index) => (
		<h2
			key={index}
			className="text-lg lg:text-xl font-semibold text-themeHighlight"
		>
			{str}
		</h2>
	));
