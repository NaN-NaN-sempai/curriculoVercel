import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [vitePreprocess()],
	kit: {
		adapter: adapter({
			"maxDuration": 10
		}),

		alias: {
			$style: "src/sass",
			$assets: "src/assets",
			$components: "src/components",
			$fonts: "src/fonts",
		},
	}
};

export default config;
