import { DictionaryWithLanguage, Page, SupportedLocale } from '@src/types';

const dictionaries: DictionaryWithLanguage = {
	en: {
		home: {
			pageName: 'Home',
			pageContent: {
				headline: 'Full-Stack Developer | Former Medical Doctor',
				summaryLabel: 'About Me',
				summary: `
I began programming as a self-taught endeavor in **2020**, and became so passionate
about it that I **switched** to a software development career, after having dedicated 
**11&nbsp;years** of my life to **Medicine**.\n
Today, as a full-stack developer, I think outside of the box and have a unique 
perspective thanks to my background. I’m happiest working in challenging and evolving
environments, on projects that **improve the user experience** and that have a 
**meaningful impact** on our world.
`,
				experienceLabel: 'Experience',
				experience: [
					{
						title: 'Full-Stack Developer',
						company: 'Vita',
						companyWebsite: 'https://vitameals.com/',
						startDate: 'Nov 2023',
						endDate: 'present',
						description: `
              • Migrate the web app, from WordPress and Vue.js to React and React Native
              • Integrate back-end APIs, ensuring efficient data flow and reduced load times`,
						stack: [
							'React.js',
							'Node.js',
							'React Native',
							'TypeScript',
							'MySQL',
						],
					},
					{
						title: 'Full-Stack Developer',
						company: 'haelsi',
						companyWebsite: 'https://haelsi.at/',
						startDate: 'Sep 2022',
						endDate: 'Sep 2023',
						description: `
              • Cut down response times by up to 80%, by optimising API endpoints
              • Improved business intelligence for the commercial team, by developing endpoints for KPI extraction
              • Created a staging environment, by containerizing the app with Docker Compose
              • Created tests for every new feature (QUnit and PHPUnit)
              • Automated routine tasks with Python scripts`,
						stack: [
							'Ember.js',
							'Laravel',
							'PHP',
							'Python',
							'MySQL',
						],
					},
					{
						title: 'Software Engineer Intern',
						company: 'Critical TechWorks',
						companyWebsite: 'https://www.criticaltechworks.com/',
						startDate: 'Jan 2022',
						endDate: 'Jun 2022',
						description: `
              • Developed the frontend (HMI) of the BMW’s cars’ infotainment
              • Added new features, with corresponding Unit Tests`,
						stack: ['C++', 'Qt'],
					},
					{
						title: 'Graduate Student Researcher',
						company: 'Universidade de Lisboa',
						companyWebsite: 'https://www.ulisboa.pt/',
						startDate: 'Jun 2020',
						endDate: 'Dec 2021',
						description: `
              • Studied the clustering of fast-food restaurants around schools
              • Analysed geospatial data`,
						stack: ['Python', 'R'],
					},
					{
						title: 'Medical Doctor',
						company: 'ARSLVT & AP-HP',
						companyWebsite: 'https://www.arslvt.min-saude.pt/',
						startDate: 'Mar 2018',
						endDate: 'Jul 2021',
						description: `
              • Worked in the ER department of the largest hospital in the country
              • Attended clerkships in Paris (>1y) and Uppsala`,
						stack: [],
					},
				],
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
				summaryLabel: 'À propos',
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
				experienceLabel: 'Expérience',
				experience: [
					{
						title: 'Développeur Full-Stack',
						company: 'Vita',
						companyWebsite: 'https://vitameals.com/',
						startDate: 'Nov 2023',
						endDate: 'actuel',
						description: `
              • Migration de l'application web, de WordPress et Vue.js vers React et React Native
              • Intégration des APIs back-end, garantissant un flux de données efficace et des temps de chargement réduits`,
						stack: [
							'React.js',
							'Node.js',
							'React Native',
							'TypeScript',
							'MySQL',
						],
					},
					{
						title: 'Développeur Full-Stack',
						company: 'haelsi',
						companyWebsite: 'https://haelsi.at/',
						startDate: 'Sep 2022',
						endDate: 'Sep 2023',
						description: `
              • Réduction des temps de réponse de 80% en optimisant les points d'API
              • Amélioration de la business intelligence pour l'équipe commerciale, en développant des points d'API pour l'extraction de KPI
              • Création d'un environnement de staging, en containerisant l'application avec Docker Compose
              • Création de tests pour chaque nouvelle fonctionnalité (QUnit et PHPUnit)
              • Automatisation des tâches de routine avec des scripts Python`,
						stack: [
							'Ember.js',
							'Laravel',
							'PHP',
							'Python',
							'MySQL',
						],
					},
					{
						title: 'Ingénieur Logiciel Stagiaire',
						company: 'Critical TechWorks',
						companyWebsite: 'https://www.criticaltechworks.com/',
						startDate: 'Jan 2022',
						endDate: 'Jun 2022',
						description: `
              • Développement du frontend (HMI) de l'infotainment des voitures BMW
              • Ajout de nouvelles fonctionnalités, avec les tests unitaires correspondants`,
						stack: ['C++', 'Qt'],
					},
					{
						title: 'Chercheur Diplômé',
						company: 'Universidade de Lisboa',
						companyWebsite: 'https://www.ulisboa.pt/',
						startDate: 'Jun 2020',
						endDate: 'Dec 2021',
						description: `
              • Étude du clustering des fast-foods autour des écoles
              • Analyse de données géospatiales`,
						stack: ['Python', 'R'],
					},
					{
						title: 'Médecin',
						company: 'ARSLVT & AP-HP',
						companyWebsite: 'https://www.arslvt.min-saude.pt/',
						startDate: 'Mar 2018',
						endDate: 'Jul 2021',
						description: `
              • Travail aux urgences du plus grand hôpital du pays
              • Stages à Paris (>1an) et Uppsala`,
						stack: [],
					},
				],
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
				summaryLabel: 'Sobre Mim',
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
				experienceLabel: 'Experiência',
				experience: [
					{
						title: 'Developer Full-Stack',
						company: 'Vita',
						companyWebsite: 'https://vitameals.com/',
						startDate: 'Nov 2023',
						endDate: 'presente',
						description: `
              • Migrei a aplicação web, de WordPress e Vue.js para React e React Native
              • Integrei APIs back-end, garantindo um fluxo de dados eficiente e tempos de carregamento reduzidos`,
						stack: [
							'React.js',
							'Node.js',
							'React Native',
							'TypeScript',
							'MySQL',
						],
					},
					{
						title: 'Developer Full-Stack',
						company: 'haelsi',
						companyWebsite: 'https://haelsi.at/',
						startDate: 'Sep 2022',
						endDate: 'Sep 2023',
						description: `
              • Reduzi os tempos de resposta até 80%, optimizando os endpoints da API
              • Melhorei a BI para a equipa comercial, desenvolvendo endpoints para extração de KPIs
              • Criei um ambiente de staging, containerizando a aplicação com Docker Compose
              • Criei testes para cada nova funcionalidade (QUnit e PHPUnit)
              • Automatizei tarefas rotineiras com scripts Python`,
						stack: [
							'Ember.js',
							'Laravel',
							'PHP',
							'Python',
							'MySQL',
						],
					},
					{
						title: 'Engenheiro de Software Estagiário',
						company: 'Critical TechWorks',
						companyWebsite: 'https://www.criticaltechworks.com/',
						startDate: 'Jan 2022',
						endDate: 'Jun 2022',
						description: `
              • Desenvolvi o frontend (HMI) do infotainment dos carros da BMW
              • Adicionei novas funcionalidades, com os respetivos testes unitários`,
						stack: ['C++', 'Qt'],
					},
					{
						title: 'Investigador Estudante de Pós-Graduação',
						company: 'Universidade de Lisboa',
						companyWebsite: 'https://www.ulisboa.pt/',
						startDate: 'Jun 2020',
						endDate: 'Dec 2021',
						description: `
              • Estudei o clustering de restaurantes de fast-food em torno das escolas
              • Analisei dados geoespaciais`,
						stack: ['Python', 'R'],
					},
					{
						title: 'Médico',
						company: 'ARSLVT & AP-HP',
						companyWebsite: 'https://www.arslvt.min-saude.pt/',
						startDate: 'Mar 2018',
						endDate: 'Jul 2021',
						description: `
              • Trabalhei no serviço de urgência do maior hospital do país
              • Frequentei estágios em Paris (>1ano) e Uppsala`,
						stack: [],
					},
				],
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
