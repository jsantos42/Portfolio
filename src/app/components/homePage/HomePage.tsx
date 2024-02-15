import { SupportedLocale } from '@src/types';
import { getDictionaries } from '@src/res/dictionaries';
import { data } from '@src/res/data';
import { SocialLogos } from '@src/app/components/homePage/SocialLogos';
import { Summary } from '@src/app/components/homePage/Summary';
import { Headline } from '@src/app/components/homePage/Headline';
import { Experience } from '@src/app/components/homePage/Experience';

export default function HomePage({
	currentLocale,
}: {
	currentLocale: SupportedLocale;
}) {
	const { headline, summary, experience, summaryLabel, experienceLabel } =
		getDictionaries()[currentLocale].home.pageContent;

	return (
		<div
			className="sm:w-[500px] lg:w-auto lg:max-w-screen-xl mx-auto p-6
		lg:pt-16 lg:px-24 flex flex-wrap justify-start"
		>
			<header className="min-w-[232px] min-[345px]:min-w-[305px] lg:w-1/2">
				<div className="lg:fixed lg:z-20 antialiased tracking-tight">
					<h1
						className="mb-1 text-3xl lg:text-4xl text-primary
					font-semibold"
					>
						{data.name}
					</h1>
					<Headline text={headline} />
					<SocialLogos classes="flex justify-start pt-6 pb-24 -ml-[9px]" />
				</div>
			</header>
			<main
				className="lg:w-1/2 max-w-[500px] pb-16 leading-relaxed
				antialiased motion-safe:animate-fadeInFromBottom"
			>
				<section aria-label="About" className="pb-16 lg:pb-24">
					<h3
						className="sticky top-nav pb-2 w-full bg-theme/95
					text-primary tracking-widest font-bold uppercase
					lg:sr-only lg:opacity-0"
					>
						{summaryLabel}
					</h3>
					<Summary text={summary} />
				</section>
				<section aria-label="Experience" className="pb-16">
					<h3
						className="sticky top-nav pb-2 w-full bg-theme/95
					text-primary tracking-widest font-bold uppercase"
					>
						{experienceLabel}
					</h3>
					<Experience {...{ experience }} />
				</section>
			</main>
		</div>
	);
}
