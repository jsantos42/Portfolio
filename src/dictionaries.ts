import { DictionaryWithLanguage, SupportedLocale } from '@src/types';

const dictionaries: DictionaryWithLanguage = {
	en: {
		pages: {
			home: '',
			about: 'About',
			projects: 'Projects',
		},
	},
	fr: {
		pages: {
			home: '',
			about: 'À propos',
			projects: 'Projets',
		},
	},
	pt: {
		pages: {
			home: '',
			about: 'Sobre',
			projects: 'Projectos',
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
