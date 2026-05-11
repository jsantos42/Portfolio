import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../globals.css';
import { SupportedLocale } from '@src/types';
import React from 'react';
// Prevents window is not defined error; also loads a placeholder of the same
// height as the navbar to prevent layout shift
import Navigation from '@src/app/components/navigation/NavigationDynamic';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'João Almeida Santos',
	description: 'Fullstack developer | Former Medical Doctor',
	keywords:
		'developer, doctor, fullstack, react, next, typescript, react-native',
	icons: {
		icon: '/favicon.png',
	},
};

export const generateStaticParams = () => {
	const locales: SupportedLocale[] = ['en', 'fr', 'pt'];
	return locales.map(i => ({
		lang: i,
	}));
};

export default async function RootLayout({
	children,
	params,
}: {
	children: React.ReactNode;
	params: Promise<{ slug?: string[] }>;
}) {
	const { slug } = await params;
	const lang = (slug?.[0] ?? 'en') as SupportedLocale;
	return (
		<html lang={lang}>
			<body className={inter.className}>
				<Navigation lang={lang} />
				<div className="min-h-fillScreen">{children}</div>
			</body>
		</html>
	);
}
