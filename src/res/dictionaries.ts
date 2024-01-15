import { DictionaryWithLanguage, SupportedLocale } from '@src/types';

const dictionaries: DictionaryWithLanguage = {
	en: {
		home: {
			pageName: '',
			pageContent: {},
		},
		about: {
			pageName: 'About',
			pageContent: {
				headline: 'Full-Stack Developer | Former Medical Doctor',
				summary: `

I began programming as a self-taught endeavor in **2020**, and I became so passionate
about it that, after having invested **11 years in Medicine**, I decided to **shift**
to a software development career. \n
As a **full-stack developer**, I bring a unique perspective shaped by 
both my medical background and comprehensive programming training.
The first provided me **self-discipline** and **resiliency**, and it also taught me 
the critical **importance of good UX and UI** through the flaws I encountered in
healthcare software. The second, combined with my **hands-on experience in both
backend and frontend development**, allows me to create holistic software solutions 
that address complex user needs. This blend of medical insight, technical
expertise, and a **self-starter** attitude positions me uniquely to 
innovate and improve digital experiences in any industry.\n
My goal is to use my diverse skill set in **challenging and evolving 
environments**, working on projects that advance technological frontiers 
and improve the user experience. My commitment goes beyond technical 
achievement, though: I value being part of a team that makes a positive
**difference**, developing technology that has a **meaningful impact** on our world.
`,
			},
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
				filtersTitle: 'Filters',
				filterButton: 'Filter',
				applyFiltersButton: 'Apply',
				expandAllButton: 'Expand All',
				collapseAllButton: 'Collapse All',
				filtersLabels: {
					field: 'Field',
					language: 'Language',
					framework: 'Framework',
					styling: 'Styling',
					db: 'Database',
					testingFramework: 'Testing Framework',
					date: 'Year',
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
				filtersTitle: 'Filtres',
				filterButton: 'Filtrer',
				applyFiltersButton: 'Appliquer',
				expandAllButton: 'Tout développer',
				collapseAllButton: 'Tout fermer',
				filtersLabels: {
					field: 'Domaine',
					language: 'Langage',
					framework: 'Framework',
					styling: 'Style',
					db: 'Base de données',
					testingFramework: 'Framework de test',
					date: 'Année',
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
				filtersTitle: 'Filtros',
				filterButton: 'Filtrar',
				applyFiltersButton: 'Aplicar',
				expandAllButton: 'Expandir todos',
				collapseAllButton: 'Recolher todos',
				filtersLabels: {
					field: 'Área',
					language: 'Linguagem',
					framework: 'Framework',
					styling: 'Styling',
					db: 'Base de dados',
					testingFramework: 'Framework de teste',
					date: 'Ano',
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
