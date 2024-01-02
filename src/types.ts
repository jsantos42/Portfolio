type Page = 'about' | 'home';

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
