import { PageParams } from '@src/types';
import { getDictionaries, getSlug } from '@src/res/dictionaries';
import Link from 'next/link';

export default function Home({ params }: { params: PageParams }) {
	const dict = getDictionaries()[params.lang];

	return (
		<>
			<h1>HomePage {dict.pages.home}</h1>
			<h2>Language is {params.lang}</h2>
			<Link href={getSlug(params.lang, dict.pages.about)}>
				Go to {dict.pages.about}
			</Link>
		</>
	);
}
