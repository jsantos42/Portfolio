import { getDictionaries, getSlug } from '@src/res/dictionaries';
import { StaticParams, SupportedLocale } from '@src/types';
import HomePage from '@src/app/components/homePage/HomePage';
import ProjectsPage from '@src/app/components/projectsPage/ProjectsPage';
import React from 'react';

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

	let componentToRender: React.JSX.Element;
	switch (remainingPathname) {
		case getSlug(dict.home.pageName):
			componentToRender = <HomePage {...{ currentLocale }} />;
			break;
		case getSlug(dict.projects.pageName):
			componentToRender = <ProjectsPage {...{ currentLocale }} />;
			break;
		default:
			componentToRender = <HomePage {...{ currentLocale }} />;
	}
	return <>{componentToRender}</>;
}
