import { SupportedLocale } from '@src/types';
import { getDictionaries } from '@src/res/dictionaries';
import { data } from '@src/res/data';
import { SocialLogos } from '@src/app/components/homePage/SocialLogos';
import { Summary } from '@src/app/components/homePage/Summary';
import { Headline } from '@src/app/components/homePage/Headline';

export default function HomePage({
	currentLocale,
}: {
	currentLocale: SupportedLocale;
}) {
	const { headline, summary } =
		getDictionaries()[currentLocale].home.pageContent;

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
					<Headline text={headline} />
				</div>
				<SocialLogos classes="flex justify-start pt-6 pb-24 -ml-[9px]" />
			</header>
			<main
				className="lg:w-1/2 max-w-[500px] pb-16 leading-relaxed
				antialiased motion-safe:animate-fadeInFromBottom"
			>
				<Summary text={summary} />
			</main>
		</div>
	);
}
