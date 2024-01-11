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
				sortButton: 'Sort',
				sortLabels: {
					recommended: 'Recommended',
					newest: 'Newest',
					oldest: 'Oldest'
				},
				filterButton: 'Filter',
				expandAllButton: 'Expand All',
				collapseAllButton: 'Collapse All',
				filtersLabels: {
					field: 'Field',
					language: 'Language',
					framework: 'Framework',
					styling: 'Styling',
					db: 'Database',
					testingFramework: 'Testing Framework',
					year: 'Year',
				}
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
				sortButton: 'Trier',
				sortLabels: {
					recommended: 'Recommandé',
					newest: 'Plus récent',
					oldest: 'Plus ancien'
				},
				filterButton: 'Filtrer',
				expandAllButton: 'Tout développer',
				collapseAllButton: 'Tout fermer',
				filtersLabels: {
					field: 'Domaine',
					language: 'Langage',
					framework: 'Framework',
					styling: 'Style',
					db: 'Base de données',
					testingFramework: 'Framework de test',
					year: 'Année',
				}
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
				sortButton: 'Ordenar',
				sortLabels: {
					recommended: 'Recomendado',
					newest: 'Mais recente',
					oldest: 'Mais antigo'
				},
				filterButton: 'Filtrar',
				expandAllButton: 'Expandir todos',
				collapseAllButton: 'Recolher todos',
				filtersLabels: {
					field: 'Área',
					language: 'Linguagem',
					framework: 'Framework',
					styling: 'Styling',
					db: 'Base de dados',
					testingFramework: 'Framework de teste',
					year: 'Ano',
				}
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
