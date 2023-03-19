import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

import { getShortSha, getBranchName } from "./git.js";

export default defineConfig({
	define: {
		__GIT_MSG__: JSON.stringify(`${getShortSha()} (${getBranchName()})`)
	},
	plugins: [sveltekit()]
});
