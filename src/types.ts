import { StaticImageData } from 'next/image';

type Page = 'home' | 'about' | 'projects';

export type SupportedLocale = 'en' | 'pt' | 'fr';

export type PageParams = {
	slug: string;
} & {
	lang: SupportedLocale;
};

export type ProjectPageContent = {
	sortTitle: string;
	sortLabels: {
		[label in SortLabel]: string;
	};
	filterButton: string;
	filtersTitle: string;
	filtersLabels: ProjectFiltersDict;
};

export type Dictionary = {
	[pageName in Page]: {
		pageName: string;
		pageContent: ProjectPageContent;
	};
};

export type DictionaryWithLanguage = {
	[language in SupportedLocale]: Dictionary;
};

export type SortLabel = 'recommended' | 'newest' | 'oldest';

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
	[K in FilterType]: Filters[K] | undefined;
};

export type FilterType =
	| 'field'
	| 'language'
	| 'framework'
	| 'styling'
	| 'db'
	| 'testingFramework'
	| 'year';

export type Filters = {
	field: Field[];
	language: ProgrammingLanguage[];
	framework: Framework[];
	styling: StylingFramework[];
	db: Database[];
	testingFramework: TestingFramework[];
	year: string[];
};

export type SelectedOptions = {
	[K in FilterType]: {
		selected: Filters[K];
		isDropdownOpen: boolean;
	};
};

export type ProjectFiltersDict = Record<FilterType, string>;

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
