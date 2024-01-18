import { DictionaryWithLanguage, Page, SupportedLocale } from '@src/types';

const dictionaries: DictionaryWithLanguage = {
	en: {
		home: {
			pageName: 'Home',
			pageContent: {
				headline: 'Full-Stack Developer | Former Medical Doctor',
				summary: `
I began programming as a self-taught endeavor in **2020**, and became so passionate
about it that I **switched** to a software development career, after having 
dedicated **11&nbsp;years** of my life to **Medicine**.\n
Today, as a **full-stack developer**, I think outside of the box and have a 
unique perspective thanks to my background. It taught me the **critical importance
of good UX and UI** through the flaws I encountered in healthcare software. And,
of course, you don't fare well in the medical field without **hard-work** and
 **self-discipline**.\n
My goal is to use my diverse skill set in **challenging and evolving 
environments**, working on projects that improve the user experience. My commitment
goes beyond technical achievement, though: I value being part of a team that makes
a positive **difference**, developing technology that has a **meaningful impact** 
on our world.
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
					oldest: 'Oldest',
				},
				filterResultsLabel: 'Filtered projects',
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
				},
			},
		},
	},
	fr: {
		home: {
			pageName: 'Accueil',
			pageContent: {
				headline: 'Développeur Full-Stack | Ancien Médecin',
				summary: `
J'ai commencé à programmer en autodidacte en **2020** et j'en suis devenu tellement passionné
que, après avoir investi **11&nbsp;ans en Médecine**, j'ai décidé de me **reconvertir** professionnellement.\n
Aujourd'hui, en tant que **développeur full-stack**, je pense différemment et j'ai une
perspective unique grâce à mon parcours. Il m'a appris l'**importance critique
d'une bonne UX et UI**, notamment en observant les lacunes des logiciels de santé.
Et, bien sûr, on ne s'en sort pas bien dans le domaine médical sans **travail acharné**
et **discipline**.\n
Mon objectif est d'exploiter mes compétences diversifiées dans des **environnements stimulants et évolutifs**, 
en travaillant sur des projets qui améliorent l'expérience utilisateur. 
Cependant, mon engagement va au-delà de la réussite technique: je cherche à faire partie d'une équipe qui a un **impact positif**.
`,
			},
		},
		projects: {
			pageName: 'Projets',
			pageContent: {
				sortButton: 'Trier',
				sortLabels: {
					recommended: 'Recommandé',
					newest: 'Plus récent',
					oldest: 'Plus ancien',
				},
				filterResultsLabel: 'Projets filtrés',
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
				},
			},
		},
	},
	pt: {
		home: {
			pageName: 'Início',
			pageContent: {
				headline: 'Developer Full-Stack | Ex-Médico',
				summary: `
Comecei a programar como autodidacta em **2020**, e rapidamente me apercebi que
tinha encontrado aquilo que queria fazer o resto da vida. Assim, decidi **largar a
carreira médica** ao fim de **11&nbsp;anos** de investimento, e tornar-me engenheiro
de software.\n
Hoje em dia, como **developer full-stack**, tenho um raciocínio "fora da caixa" 
e uma perspectiva única moldada pelo meu background. Aprendi
a **importância crítica de uma boa UX e UI** através das falhas que encontrei nos softwares de saúde com que
trabalhei. E obviamente que **disciplina** e **resiliência** são pedras basilares
para a progressão na carreira médica. \n
O meu objectivo é alavancar o meu conjunto diverso de *skills* em **ambientes desafiantes e em 
constante mutação**, trabalhando em projectos que melhorem a experiência do utilizador.
Mas não procuro apenas sucesso técnico: pretendo fazer parte de uma equipa 
que faz a **diferença** e que desenvolve tecnologia que tem um **impacto 
significativo** no nosso mundo.
`,
			},
		},
		projects: {
			pageName: 'Projectos',
			pageContent: {
				sortButton: 'Ordenar',
				sortLabels: {
					recommended: 'Recomendado',
					newest: 'Mais recente',
					oldest: 'Mais antigo',
				},
				filterResultsLabel: 'Projectos filtrados',
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
				},
			},
		},
	},
};

export const getDictionaries: () => DictionaryWithLanguage = () => dictionaries;

export const getSlug = (str: string) => {
	return str
		.normalize('NFD') // Decompose combined graphemes into the combination of simple ones
		.replace(/\p{Diacritic}/gu, '') // replace all diacritical marks (accents)
		.toLowerCase()
		.replace(/ /g, '_');
};

export const getNewPathname = (lang: SupportedLocale, page: Page) => {
	const { pageName } = dictionaries[lang][page];

	if (!pageName) {
		return `/${lang}`;
	}

	return `/${lang}/${getSlug(pageName)}`;
};
