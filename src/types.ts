import {StaticImageData} from "next/image";

type Page = 'home' | 'about' | 'projects';

export type SupportedLocale = 'en' | 'pt' | 'fr';

export type PageParams = {
	slug: string;
} & {
	lang: SupportedLocale;
};

export type Dictionary = {
	pages: {
		[pageName in Page]: string;
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
