import { PageParams } from '@/types';
import { dictionaries, getSlug } from '@/dictionaries';
import Link from 'next/link';

export default function Home({ params }: { params: PageParams }) {
	const dict = dictionaries[params.lang];

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
