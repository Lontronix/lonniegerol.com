<script>
export let data
</script>

{#each data.posts as post, i}
	<div>
		{@html post.content}
		{#if i != data.posts.length - 1}
			<hr>
		{/if}
	</div>
{/each}

<style>
	@import "../../styles/blog.css";

	hr {
		position:relative;
		padding: 2rem 0;
		border:none;
	}

	.post-title a {
		color: var(--accentColor);
	}

	hr:before {
		content:'\2044\2217\2013\2013\2013\2013\2013\2013\2013\2013\2013\2013\2217\2044';
		position:absolute;
		top:1.2rem;
		right:0;
		left:0;
		color: var(--accentColor);
		text-align:center;
	}

</style>
