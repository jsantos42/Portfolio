import { InfoType, PageParams } from '@src/types';
import { getDictionaries } from '@src/res/dictionaries';
import { data, getInfoLink, getInfoSvg } from '@src/res/data';
import { TouchableLink } from '@src/app/components/navigation/TouchableLink';
import Markdown from 'react-markdown';

export default function Home({ params }: { params: PageParams }) {
	const { pageContent, pageName } = getDictionaries()[params.lang].about;
	const infoEntries = Object.entries(data.info) as [InfoType, string][];

	return (
		<>
			<div className="p-6 antialiased tracking-tight">
				<h2 className="text-3xl text-primary font-semibold mb-1">
					{data.name}
				</h2>
				{(pageContent.headline as string).split('|').map((i, index) => (
					<h2 key={index} className="font-semibold">
						{i}
					</h2>
				))}
			</div>
			<div className="flex justify-start pl-[14px] pb-24">
				{infoEntries
					.filter(
						([key, value]) =>
							key === 'emailAddress' ||
							key === 'linkedInUser' ||
							key === 'gitHubUser'
					)
					.sort(([keyA, valueA], [keyB, valueB]) =>
						keyA < keyB ? 1 : -1
					)
					.map(([key, value]) => (
						<TouchableLink
							key={key}
							href={getInfoLink(key, value)}
							inNewWindow={true}
						>
							{getInfoSvg(key)}
						</TouchableLink>
					))}
			</div>
			<div className="px-6 pb-16 leading-relaxed antialiased">
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
			</div>
		</>
	);
}
