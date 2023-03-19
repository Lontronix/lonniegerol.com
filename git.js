import { execSync } from "node:child_process";
// Inspired by https://github.com/ComputerScienceHouse/packet/blob/develop/packet/git.py

export function getShortSha(commit = "HEAD") {
	const gitHashParse = execSync(`git rev-parse --short ${commit}`);
	return String(gitHashParse).trim();
}

export function getBranchName(commit = "HEAD") {
	const gitBranchParse = execSync(`git rev-parse --abbrev-ref ${commit}`);
	return String(gitBranchParse).trim();
}
