import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../globals.css';
import { StaticParams, SupportedLocale } from '@src/types';
import React from 'react';
import dynamic from 'next/dynamic';

// https://nextjs.org/docs/app/building-your-application/optimizing/lazy-loading#nextdynamic
// Prevents window is not defined error; also loads a placeholder of the same
// height as the navbar to prevent layout shift
const Navigation = dynamic(() => import('@src/app/components/navigation'), {
	ssr: false,
	loading: () => <div className="h-nav"></div>,
});

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

export default function RootLayout({
	children,
	params: { slug },
}: {
	children: React.ReactNode;
	params: StaticParams;
}) {
	return (
		<html lang={slug[0]}>
			<body className={inter.className}>
				<Navigation lang={slug[0]} />
				<div className="min-h-fillScreen">{children}</div>
			</body>
		</html>
	);
}
