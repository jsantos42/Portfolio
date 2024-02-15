export const Headline = ({ text }: { text: string }) => {
	const strArray = text.split('| ');
	return (
		<h2 className="text-lg lg:text-xl font-semibold text-themeHighlight">
			{strArray[0]}
			<br />
			{strArray[1]}
		</h2>
	);
};
