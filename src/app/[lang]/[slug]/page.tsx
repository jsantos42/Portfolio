import { PageParams } from '@src/types';
import { getDictionaries } from '@src/res/dictionaries';
import { data } from '@src/res/data';
import Markdown from 'react-markdown';
import { SocialLogos } from '@src/app/components/SocialLogos';

export default function Home({ params }: { params: PageParams }) {
	const { pageContent, pageName } = getDictionaries()[params.lang].home;

	return (
		<div
			className="sm:w-[500px] lg:w-auto lg:max-w-screen-xl mx-auto p-6
		lg:pt-16 lg:px-24 flex flex-wrap justify-start"
		>
			<header className="min-w-[232px] min-[345px]:min-w-[305px] lg:w-1/2">
				<div className="antialiased tracking-tight">
					<h1 className="text-3xl lg:text-4xl text-primary font-semibold mb-1">
						{data.name}
					</h1>
					{(pageContent.headline as string)
						.split('|')
						.map((i, index) => (
							<h2
								key={index}
								className="text-lg lg:text-xl font-semibold
								text-themeHighlight"
							>
								{i}
							</h2>
						))}
				</div>
				<SocialLogos classes="flex justify-start pt-6 pb-24 -ml-[9px]" />
			</header>
			<main
				className="lg:w-1/2 max-w-[500px] pb-16 leading-relaxed
				antialiased motion-safe:animate-fadeInFromBottom"
			>
				<Markdown
					className={'flex flex-col gap-y-3'}
					components={{
						strong: props => (
							<strong className="text-primary" {...props} />
						),
					}}
				>
					{pageContent.summary}
				</Markdown>
			</main>
		</div>
	);
}
