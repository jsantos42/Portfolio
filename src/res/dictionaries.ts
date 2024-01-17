import { DictionaryWithLanguage, SupportedLocale } from '@src/types';

const dictionaries: DictionaryWithLanguage = {
	en: {
		home: {
			pageName: 'Home',
			pageContent: {
				headline: 'Full-Stack Developer | Former Medical Doctor',
				summary: `
I began programming as a self-taught endeavor in **2020**, and became so passionate
about it that, after having invested **11&nbsp;years in Medicine**, I decided to **shift**
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
En tant que **développeur full-stack**, je propose une perspective unique grâce à mon expérience 
médicale et ma formation complète en programmation. La médecine m'a inculqué la **discipline** et
la **résilience**, mais elle m'a également sensibilisé à l'**importance cruciale d'une interface utilisateur 
de qualité**, notamment en observant les lacunes des logiciels de santé. Grâce à ma formation en programmation et 
à mon **expérience pratique du développement backend et frontend**, je suis en mesure de concevoir des 
solutions logicielles complètes qui répondent aux besoins complexes des utilisateurs. Mon expertise médicale et technique, associée à 
mon **autonomie**, me permet d'innover et d'améliorer l'expérience numérique quel que soit le secteur d'activité.\n
Mon objectif est d'exploiter mes compétences diversifiées dans des **environnements stimulants et évolutifs**, 
en travaillant sur des projets qui repoussent les limites technologiques et améliorent l'expérience utilisateur. 
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
				headline: 'Desenvolvedor Full-Stack | Ex-Médico',
				summary: `
Comecei a programar como autodidacta em **2020**, e rapidamente me apercebi que
tinha encontrado aquilo que queria fazer o resto da vida. Assim, decidi **largar a
carreira médica** ao fim de **11&nbsp;anos** de investimento, e tornar-me engenheiro
de software.\n
Como **desenvolvedor full-stack**, trago uma perspectiva única moldada tanto pela 
minha formação médica como pela minha formação em programação. A primeira forneceu-me
**disciplina** e **resiliência**, e também me ensinou a **importância crítica de 
uma boa UX e UI** através das falhas que encontrei nos softwares de saúde com que
trabalhei. A segunda, combinada com minha **experiência prática em desenvolvimento
backend e frontend**, permite-me criar soluções holísticas que respondem às necessidades
complexas dos utilizadores. Essa combinação de conhecimento médico, experiência técnica
e uma atitude **empreendedora** posiciona-me de forma única para inovar e melhorar 
as experiências digitais em qualquer setor.\n
O meu objectivo é utilizar o meu conjunto diversificado de skills em **ambientes desafiantes e em constante mutação**,
trabalhando em projetos que avançam as fronteiras tecnológicas e melhoram a experiência do utilizador.
Contudo, não procuro apenas sucesso técnico: pretendo fazer parte de uma equipa que faz a **diferença**
e que desenvolve tecnologia que tem um **impacto significativo** no nosso mundo.
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
				filterResultsLabel: 'Projetos filtrados',
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

export const getNewPathname = (lang: SupportedLocale, pageName: string) => {
	if (!pageName) {
		return `/${lang}`;
	}

	return `/${lang}/${getSlug(pageName)}`;
};
