import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    // Marquee animations with common durations
    'animate-[marquee_30s_linear_infinite]',
    'animate-[marquee-reverse_30s_linear_infinite]',
    'animate-[marquee-up_30s_linear_infinite]',
    'animate-[marquee-down_30s_linear_infinite]',
    // Add other common durations if needed
    'animate-[marquee_20s_linear_infinite]',
    'animate-[marquee-reverse_20s_linear_infinite]',
    'animate-[marquee-up_20s_linear_infinite]',
    'animate-[marquee-down_20s_linear_infinite]',
  ],
  theme: {
  	extend: {
  		fontFamily: {
  			'sans': ["'Schibsted Grotesk'", "Roboto", "sans-serif"],
  			'mono': ["'Space Mono'", "Roboto Mono", "monospace"]
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
