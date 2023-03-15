import jsdom from 'jsdom';

export const fetchMarkdownPosts = async () => {
	const allPostFiles = import.meta.glob('/src/routes/blog/**/*.md')
	const iterablePostFiles = Object.entries(allPostFiles)

	const allPosts = await Promise.all(
		iterablePostFiles.map(async ([path, resolver]) => {
			const post = await resolver()
			const content = post.default.render()

			let postPath = path.slice(11, -3)
			postPath = postPath.replace("+page", "");
			postPath = postPath.replace("/src/routes", "");

			const allPostsDom = new jsdom.JSDOM(content.html);
			const elements = allPostsDom.window.document.querySelectorAll('.front-matter');
			Array.from(elements).forEach((element, _) => {
				const oldHeader = element.querySelectorAll(".post-title")[0];
				element.removeChild(oldHeader);
				const newHeader = allPostsDom.window.document.createElement("h1");
				newHeader.className = "post-title";
				newHeader.innerHTML = `<a href="${postPath}">${post.metadata.title}</a>`
				element.prepend(newHeader);
			});

			return {
				content: allPostsDom.window.document.body.innerHTML,
				meta: post.metadata,
				path: postPath,
			}
		})
)
	return allPosts
}
