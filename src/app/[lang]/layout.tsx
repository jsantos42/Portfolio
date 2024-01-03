import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../globals.css';
import { PageParams } from '@src/types';
import React from 'react';
import { Navigation } from '@src/app/components/navigation/Navigation';
import {Footer} from "@src/app/components/Footer";

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'João Almeida Santos',
	description: 'Personal website and portfolio',
};

export default function RootLayout({
	children,
	params: { lang },
}: {
	children: React.ReactNode;
	params: PageParams;
}) {
	return (
		<html lang={lang}>
			<body className={inter.className}>
				<Navigation {...{ lang }} />
				<div className="min-h-fillScreen">{children}</div>
				<Footer/>
			</body>
		</html>
	);
}
