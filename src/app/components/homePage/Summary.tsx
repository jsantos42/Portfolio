import Markdown from 'react-markdown';

export const Summary = ({ text }: { text: string }) => (
	<Markdown
		className={'flex flex-col gap-y-3'}
		components={{
			strong: props => <strong className="text-primary" {...props} />,
		}}
	>
		{text}
	</Markdown>
);
