import { DictionaryWithLanguage, SupportedLocale } from '@/types';

const dictionaries: DictionaryWithLanguage = {
	en: {
		pages: {
			home: '',
			about: 'About',
		},
	},
	fr: {
		pages: {
			home: '',
			about: 'À propos',
		},
	},
	pt: {
		pages: {
			home: '',
			about: 'Sobre',
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
