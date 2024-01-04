import {StaticImageData} from "next/image";

type Page = 'home' | 'about' | 'projects';

export type SupportedLocale = 'en' | 'pt' | 'fr';

export type PageParams = {
	slug: string;
} & {
	lang: SupportedLocale;
};

// CHANGE THIS
export type Content = any;

export type Dictionary = {
	[pageName in Page]: {
		pageName: string;
		pageContent: Content;
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
	brief: string;
	languages: string[];
	keywords: string[];
	repo: string;
	description: string;
}
