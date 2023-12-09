import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [vitePreprocess()],
	kit: {
		adapter: adapter(),

		alias: {
			$style: "src/sass",
			$assets: "src/assets",
			$components: "src/components",
			$fonts: "src/fonts",
		},
	}
};

export default config;
