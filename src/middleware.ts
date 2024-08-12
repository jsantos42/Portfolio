// THIS PAGE MUST BE ON THE SAME LEVEL AS THE PAGES/APP FOLDER !!!
import { SupportedLocale } from '@src/types';
import { NextRequest, NextResponse } from 'next/server';
import { match } from '@formatjs/intl-localematcher';
import Negotiator from 'negotiator';
import { getNewPathname } from '@src/res/dictionaries';

//==============================================================================
// LOCALES
//==============================================================================
const defaultLocale = 'en';
const supportedLocales: SupportedLocale[] = [defaultLocale, 'fr', 'pt'];

//==============================================================================
// MIDDLEWARE CONFIG (use `?!` to exclude routes from the middleware)
//==============================================================================
export const config = {
	matcher: ['/((?!api|_next/static|_next/image|favicon.png).*)'],
};

//==============================================================================
// MIDDLEWARE
//==============================================================================
export function middleware(req: NextRequest) {
	const { pathname } = req.nextUrl;
	const currentLocale = pathname.split('/')[1];

	if (!supportedLocales.includes(currentLocale as SupportedLocale)) {
		const acceptLangHeaderValue =
			req.headers.get('accept-language') ?? undefined;
		const negotiator = new Negotiator({
			headers: { 'accept-language': acceptLangHeaderValue },
		});
		const languages = negotiator.languages();

		// Protect against 'RangeError: Incorrect locale information provided'
		let newLocale: SupportedLocale;
		try {
			newLocale = match(
				languages,
				supportedLocales,
				defaultLocale
			) as SupportedLocale;
		} catch (error) {
			console.log(error);
			newLocale = defaultLocale;
		}

		req.nextUrl.pathname = getNewPathname(newLocale, 'home');
		return NextResponse.redirect(req.nextUrl);
	}
}
