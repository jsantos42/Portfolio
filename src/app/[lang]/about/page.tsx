import { PageParams } from '@src/types';
import { getDictionaries, getSlug } from '@src/dictionaries';
import Link from 'next/link';

export default function About({ params }: { params: PageParams }) {
	const dict = getDictionaries()[params.lang];

	return (
		<>
			<h1>{dict.pages.about}</h1>
			<h2>Language is {params.lang}</h2>
			<Link href={getSlug(params.lang, dict.pages.home)}>
				Go to {dict.pages.home}
			</Link>
		</>
	);
}
