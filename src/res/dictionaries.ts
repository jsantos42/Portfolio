import { DictionaryWithLanguage, SupportedLocale } from '@src/types';

const dictionaries: DictionaryWithLanguage = {
	en: {
		home: {
			pageName: '',
			pageContent: {},
		},
		about: {
			pageName: 'About',
			pageContent: {},
		},
		projects: {
			pageName: 'Projects',
			pageContent: {
				filters: 'Filters',
				field: 'Field',
				language: 'Language',
				framework: 'Framework',
				styling: 'Styling',
				db: 'Database',
				testingFramework: 'Testing Framework',
				year: 'Year',
			},
		},
	},
	fr: {
		home: {
			pageName: '',
			pageContent: {},
		},
		about: {
			pageName: 'À propos',
			pageContent: {},
		},
		projects: {
			pageName: 'Projets',
			pageContent: {
				filters: 'foo',
			},
		},
	},
	pt: {
		home: {
			pageName: '',
			pageContent: {},
		},
		about: {
			pageName: 'Sobre',
			pageContent: {},
		},
		projects: {
			pageName: 'Projectos',
			pageContent: {
				filters: 'foo',
			},
		},
	},
};

export const getDictionaries: () => DictionaryWithLanguage = () => dictionaries;

export const getSlug = (lang: SupportedLocale, pageName: string) => {
	if (!pageName) {
		return `/${lang}`;
	}

	const pageSlug = pageName
		.normalize('NFD') // Decompose combined graphemes into the combination of simple ones
		.replace(/\p{Diacritic}/gu, '') // replace all diacritical marks (accents)
		.toLowerCase()
		.replace(/ /g, '_');
	return `/${lang}/${pageSlug}`;
};
