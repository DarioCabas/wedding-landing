/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
	"./node_modules/tw-elements/dist/js/**/*.js",
	"./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
],
	theme: {
		extend: {},
	},
	plugins: [require("tw-elements/dist/plugin.cjs"), nextui()],
}
