<script>
	export let env;
</script>

<footer>
	<p>Copyright &copy; {new Date().getFullYear()} - Lonnie Gerol All Rights Reserved.</p>

	<div>
		<a href="https://iosdev.space/@lonnie"><img class="social-image" src="/icons/mastodon.svg"/></a>
		<a href="https://github.com/lontronix"><img class="social-image" src="/icons/github.svg"/></a>
		<a href="https://www.linkedin.com/in/lonniegerol"><img class="social-image" src="/icons/linkedin.svg"/></a>
	</div>

	{#if env === "development"}
		<p><a href="https://github.com/lontronix/lonniegerol.com">{ __GIT_MSG__ }</a></p>
	{:else}
		<p><a href="https://github.com/lontronix/lonniegerol.com">View on GitHub</a></p>
	{/if}

</footer>

<style>

	.social-image {
		width: 1.35em;
		height: 1.35em;
		filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(139deg) brightness(103%) contrast(101%);
	}

	footer {
		margin: auto;
		font-size: 14px;
		text-align: center;
	}

	@media (prefers-color-scheme: light) {
		.social-image {
			filter: invert(0%) sepia(0%) saturate(56%) hue-rotate(325deg) brightness(107%) contrast(100%);
		}
	}

</style>
