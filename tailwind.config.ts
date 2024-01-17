import type { Config } from 'tailwindcss';

// Measures in rem
const navHeight: number = 4;
const sortFilterBarHeight: number = 3;
const sideBarWidth: number = 250;

// Using rgba() instead of rgb() to allow the use of the opacity modifier
// cf https://tailwindcss.com/docs/background-color#changing-the-opacity
const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			backgroundColor: {
				theme: 'rgba(var(--background-rgb))',
				highlight: 'rgba(var(--background-highlight-rgb))',
				primary: 'rgba(var(--primary-rgb))',
			},
			colors: {
				theme: 'rgba(var(--foreground-rgb))',
				primary: 'rgba(var(--primary-rgb))',
				contrast: 'rgba(var(--background-rgb))',
			},
			width: {
				sidebar: `${sideBarWidth}px`,
			},
			height: {
				nav: `${navHeight}rem`,
				sortFilterBar: `${sortFilterBarHeight}rem`,
			},
			minHeight: {
				fillScreen: `calc(100dvh - ${navHeight}rem)`,
				sidebar: `calc(100dvh - ${navHeight + sortFilterBarHeight}rem)`,
			},
			maxHeight: {
				sidebar: `calc(100dvh - ${navHeight + sortFilterBarHeight}rem)`,
			},
			animation: {
				fadeInFromTop: 'fromTop 0.2s ease-out',
				fadeInFromBottom: 'fromBottom 0.5s ease-out',
				fadeInFromLeft: 'fromLeft 0.2s ease-out',
			},
			gridTemplateColumns: {
				projectsMobile: '1fr',
				projects: 'repeat(auto-fit, minmax(324px, 1fr))',
			},
			spacing: {
				// allows to customize Top / Right / Bottom / Left (eg: top-nav)
				nav: `${navHeight}rem`,
				sortFilterBar: `${navHeight + sortFilterBarHeight}rem`,
			},
			gridTemplateRows: {
				projects: 'repeat(2, 40px)',
			},
			aspectRatio: {
				'16/10': '16 / 10',
			},
		},
	},
	plugins: [],
};
export default config;
