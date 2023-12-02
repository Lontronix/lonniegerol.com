import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

import { getShortSha, getBranchName } from "./git.js";

export default defineConfig({
	define: {
		__GIT_MSG__: JSON.stringify(`${getShortSha()} (${getBranchName()})`),
		__LONNIE_SERIOUS_IMG__: JSON.stringify("https://s3.csh.rit.edu/lontronix-website/me.jpeg"),
		__LONNIE_MEMOJI__IMG__: JSON.stringify("https://s3.csh.rit.edu/lontronix-website/memoji.png"),
		__RESUME_URL__: JSON.stringify("https://csh.rit.edu/~lontronix/lonnie-gerol-resume.pdf")
	},
	plugins: [sveltekit()]
});
