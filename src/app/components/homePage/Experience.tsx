import { HomePageContent } from '@src/types';
import Link from 'next/link';

export const Experience = ({
	experience,
}: {
	experience: HomePageContent['experience'];
}) => (
	<div className="flex flex-col gap-16">
		{experience.map(position => (
			<Link
				key={position.company}
				href={position.companyWebsite}
				rel={'no-referrer'}
				target={'_blank'}
			>
				<div className="flex flex-col gap-y-2">
					<p
						className="font-semibold text-xs tracking-wide
				uppercase antialiased leading-snug "
					>
						{position.startDate} - {position.endDate}
					</p>
					<h1 className="text-themeHighlight font-medium">
						{position.title} @ {position.company}
					</h1>
					<ul className="text-sm text-theme/80">
						{position.description
							.split('•')
							.slice(1)
							.map(i => (
								<li key={i} className="">
									• {i}
								</li>
							))}
					</ul>
					<ul
						className="mt-2 flex flex-wrap justify-center
						gap-x-3 text-sm font-semibold text-primary tracking-wide"
					>
						{position.stack.map(i => (
							<li key={i}>{i}</li>
						))}
					</ul>
				</div>
			</Link>
		))}
	</div>
);
