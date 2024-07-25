import React from 'react';
import dynamic from 'next/dynamic';
import { getDictionaries, getSlug } from '@src/res/dictionaries';
import { StaticParams, SupportedLocale } from '@src/types';
import HomePage from '@src/app/components/homePage';

// https://nextjs.org/docs/app/building-your-application/optimizing/lazy-loading#nextdynamic
const ProjectsPage = dynamic(() => import('@src/app/components/projectsPage'), {
	ssr: false,
});

export const dynamicParams = false;

export const generateStaticParams = () => {
	const dictionaries = getDictionaries();
	const locales: SupportedLocale[] = ['en', 'fr', 'pt'];
	let params: StaticParams[] = [];

	locales.forEach(locale => {
		params.push({
			slug: [locale, ''],
		});
		Object.values(dictionaries[locale]).forEach(({ pageName }) => {
			params.push({
				slug: [locale, getSlug(pageName)],
			});
		});
	});
	return params;
};

export default function Page({
	params: {
		slug: [currentLocale, remainingPathname],
	},
}: {
	params: { slug: [SupportedLocale, string] };
}) {
	const dict = getDictionaries()[currentLocale];
	const componentMap = {
		[getSlug(dict.home.pageName)]: HomePage,
		[getSlug(dict.projects.pageName)]: ProjectsPage,
	};
	const ComponentToRender = componentMap[remainingPathname] || HomePage;

	return <ComponentToRender {...{ currentLocale }} />;
}
