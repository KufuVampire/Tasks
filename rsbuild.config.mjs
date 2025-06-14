import { defineConfig, loadEnv } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import path from 'path';

const { publicVars } = loadEnv();

export default defineConfig({
	plugins: [pluginReact()],
	html: {
		title: 'Career App'
	},
	source: {
		define: publicVars,
	},
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
		},
	},
});
