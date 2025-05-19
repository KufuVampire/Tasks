import { defineConfig, loadEnv } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import path from 'path';

const { publicVars } = loadEnv();

export default defineConfig({
	plugins: [pluginReact()],
	source: {
		define: publicVars,
	},
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
		},
	},
});
