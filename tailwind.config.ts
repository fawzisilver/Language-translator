import type { Config } from "tailwindcss";

export default {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				background: "var(--background)",
				foreground: "var(--foreground)",
			},
			backgroundImage: {
				"custom-beige":
					"linear-gradient(44.8deg, rgba(255, 136, 102, 0.67) -53.1%, rgba(255, 221, 136, 0.28) 49%)",
			},
			translate: {
				active: "1px",
			},
		},
	},
	plugins: [],
} satisfies Config;
