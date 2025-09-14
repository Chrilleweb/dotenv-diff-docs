import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const config = {
  preprocess: vitePreprocess(),
  kit: {
    alias: {
      $components: 'src/components'
    },
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: 'index.html'
    }),
    paths: {
      base: process.env.NODE_ENV === 'production' ? '/dotenv-diff.github.io' : ''
    },
	prerender: {
    handleHttpError: 'warn'
  }
  }
};

export default config;
