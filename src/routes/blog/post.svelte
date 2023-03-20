<script>
	import { MetaTags } from 'svelte-meta-tags';

	export let title
	export let date

	const dateObject = new Date(date)
	const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
</script>

<MetaTags
	title="{title}"
	description="Lonnie's Corner of the Internet"
	openGraph={{
		type: "website",
		title: title,
		description: "Lonnie's Corner of the Internet",
		images: [{
			url: "https://s3.csh.rit.edu/lontronix-website/lonnie-hero.jpeg",
			width: 2400,
			height: 1260,
			alt: "Lonnie Standing on the peak of a mountain"
		}]
	}}
/>
<article>
	<div class="front-matter">
		<h1 class="post-title">{title}</h1>
		<p class="post-date-posted">// {dateObject.toLocaleDateString("en-US", options)}</p>
	</div>

  <slot />

</article>

<style>
	@import "../../styles/blog.css";
</style>
