import { getHighlighter } from 'shiki';

const THEME = 'github-dark';

/**
* @param code {string} - code to highlight
* @param lang {string} - code language
* @param meta {string} - code meta
* @returns {Promise<string>} - highlighted html
*/
async function highlighter(code: any, lang: any, meta: any): Promise<any> {
	const shikiHighlighter = await getHighlighter({
		theme: THEME,
	});
	const html = shikiHighlighter.codeToHtml(code, {
		lang
	});
	return escapeHtml(html);
}

/**
* Returns code with curly braces and backticks replaced by HTML entity equivalents
* @param {string} html - highlighted HTML
* @returns {string} - escaped HTML
*/
function escapeHtml(code: string): string {
	const dict = {
		'{': '&lbrace;',
		'}': '&rbrace;',
		'`': '&grave;'
	};

	return code.replace(
		/[{}`]/g,
		(chr: string) => dict[chr as keyof typeof dict]
	);
}

export default highlighter;
