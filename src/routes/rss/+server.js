import { fetchMarkdownPosts } from '$lib/Blog/fetch-posts.js';
import { Feed } from "feed";

export const prerender = true;

export const GET = async () => {
	const allPosts = await fetchMarkdownPosts()
	const sortedPosts = allPosts.sort((a, b) => new Date(b.date) - new Date(a.date))

	const body = render(sortedPosts)
	const options = {
	headers: {
		'Cache-Control': 'max-age=0, s-maxage=3600',
		'Content-Type': 'application/xml',
	}
	};

	return new Response(
		body,
		options
	)

}

const render = (posts) =>
{
	const feed = new Feed({
	  title: "Lonnie Gerol",
	  description: "Lonnie's corner of the internet",
	  id: "https://lonniegerol.com/",
	  link: "https://lonniegerol.com/",
	  language: "en", // optional, used only in RSS 2.0, possible values: http://www.w3.org/TR/REC-html40/struct/dirlang.html#langcodes
	  image: "https://s3.csh.rit.edu/lontronix-website/favicon.png",
	  favicon: "https://s3.csh.rit.edu/lontronix-website/favicon.png",
	  copyright: "All rights reserved 2023, Lonnie Gerol",
	  feedLinks: {
		atom: "https://lonniegerol.com/rss"
	  },
	  author: {
		name: "Lonnie Gerol",
		email: "lonnie@lonniegerol.com",
		link: "https://lonniegerol.com/"
	  }
	});

	posts.forEach(post => {
		const postURL = `https://lonniegerol.com${post.path}`;

		feed.addItem({
			title: post.meta.title,
			id: postURL,
			link: postURL,
			date: new Date(post.meta.date),
			content: post.content,
			author: [
				{
					name: "Lonnie Gerol",
					email: "lonnie@lonniegerol.com",
					link: "https://lonniegerol.com"
				}
			]

		})

	});

	return feed.atom1();
};
