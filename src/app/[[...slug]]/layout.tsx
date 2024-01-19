import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../globals.css';
import { StaticParams, SupportedLocale } from '@src/types';
import React from 'react';
import { Navigation } from '@src/app/components/navigation/Navigation';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'João Almeida Santos',
	description: 'Personal website and portfolio',
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
