import type { Config } from 'tailwindcss';

const navHeight: string = '4rem';
const footerHeight: string = '6rem';

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
			},
			minHeight: {
				fillScreen: `calc(100vh - ${navHeight} - ${footerHeight})`,
			},
		},
	},
	plugins: [],
};
export default config;
