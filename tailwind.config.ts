import type { Config } from 'tailwindcss';

const navHeight: string = '4rem';
const footerHeight: string = '6rem';
const sortFilterHeight: string = '3rem';

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
			},
			colors: {
				theme: 'rgba(var(--foreground-rgb))',
			},
			height: {
				nav: navHeight,
				footer: footerHeight,
				sortFilterHeight: sortFilterHeight,
			},
			minHeight: {
				fillScreen: `calc(100vh - ${navHeight} - ${footerHeight})`,
				sidebarDesktop: `calc(100vh - ${navHeight} - ${footerHeight})`,
				sidebarMobile: `calc(100vh - ${navHeight} - ${footerHeight} - ${sortFilterHeight})`,
			},
			maxHeight: {
				sidebarDesktop: `calc(100vh - ${navHeight})`,
				sidebarMobile: `calc(100vh - ${navHeight} - ${sortFilterHeight})`,
			},
			animation: {
				fadeInFromTop: 'fromTop 0.2s ease-out',
				fadeInFromLeft: 'fromLeft 0.2s ease-out',
			},
			gridTemplateColumns: {
				projectsMobile: '1fr',
				projects: 'repeat(auto-fill, minmax(400px, 1fr))',
			},
			spacing: {
				// allows to customize Top / Right / Bottom / Left (eg: top-nav)
				nav: `${navHeight}`,
			},
		},
	},
	plugins: [],
};
export default config;
