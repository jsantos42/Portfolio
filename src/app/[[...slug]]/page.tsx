import React from 'react';
import { getDictionaries, getSlug } from '@src/res/dictionaries';
import { StaticParams, SupportedLocale } from '@src/types';
import HomePage from '@src/app/components/homePage';
import ProjectsPage from '@src/app/components/projectsPage/ProjectsPageDynamic';

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

export default async function Page({
	params,
}: {
	params: Promise<{ slug?: string[] }>;
}) {
	const { slug } = await params;
	const currentLocale = (slug?.[0] ?? 'en') as SupportedLocale;
	const remainingPathname = slug?.[1] ?? '';
	const dict = getDictionaries()[currentLocale];
	const componentMap = {
		[getSlug(dict.home.pageName)]: HomePage,
		[getSlug(dict.projects.pageName)]: ProjectsPage,
	};
	const ComponentToRender = componentMap[remainingPathname] || HomePage;

	return <ComponentToRender {...{ currentLocale }} />;
}
