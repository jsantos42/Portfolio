import { StaticImageData } from 'next/image';

export type SupportedLocale = 'en' | 'pt' | 'fr';

//==============================================================================
// PAGES
//==============================================================================
export type PageParams = {
	slug: string;
} & {
	lang: SupportedLocale;
};

type Page = 'home' | 'projects';

type ProjectPageContent = {
	sortButton: string;
	sortLabels: {
		[criteria in SortCriteria]: string;
	};
	filtersTitle: string;
	filterButton: string;
	applyFiltersButton: string;
	expandAllButton: string;
	collapseAllButton: string;
	filtersLabels: ProjectFiltersDict;
};

type HomePageContent = {
	headline: string,
	summary: string,
};


type PageContent = {
	home: HomePageContent;
	projects: ProjectPageContent;
};

//==============================================================================
// DICTIONARY, DATA & PROJECT
//==============================================================================
export type Dictionary = {
	[page in Page]: {
		pageName: string;
		pageContent: PageContent[page];
	};
};

export type DictionaryWithLanguage = {
	[language in SupportedLocale]: Dictionary;
};

export type InfoType =
	| 'phoneNumber'
	| 'emailAddress'
	| 'linkedInUser'
	| 'gitHubUser'
	| 'website';

export type Data = {
	name: string;
	info: {
		[info in InfoType]: string;
	};
};

export type Project = {
	title: string;
	img: StaticImageData;
	repo: string;
	brief: string;
	description: string;
} & {
	[K in keyof Filters]: Filters[K] | undefined;
};

//==============================================================================
// FILTERS AND SORTING
//==============================================================================
export type SortCriteria = 'recommended' | 'newest' | 'oldest';

export type Filters = {
	field: Field[];
	language: ProgrammingLanguage[];
	framework: Framework[];
	styling: StylingFramework[];
	db: Database[];
	testingFramework: TestingFramework[];
	date: string[];
};

export type SelectedOptions = {
	[K in keyof Filters]: {
		selected: Filters[K];
		isDropdownOpen: boolean;
	};
};

export type ProjectFiltersDict = Record<keyof Filters, string>;

export type Field =
	| 'Front End'
	| 'Back End'
	| 'Mobile'
	| 'Datascience'
	| 'Low Level'
	| 'Game Dev';

export type ProgrammingLanguage =
	| 'TypeScript'
	| 'JavaScript'
	| 'PHP'
	| 'Python'
	| 'R'
	| 'C'
	| 'C++';

export type Framework =
	| 'React.js'
	| 'Next.js'
	| 'React Native'
	| 'Node.js'
	| 'Express.js'
	| 'Laravel'
	| 'Qt';

export type StylingFramework =
	| 'Tailwind'
	| 'Styled Components'
	| 'CSS/SASS/LESS';

export type Database = 'MySQL' | 'PostgreSQL';

export type TestingFramework = 'PHPunit';
