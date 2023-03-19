<script>

	export let title
	export let date

	const dateObject = new Date(date)
	const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
</script>

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
