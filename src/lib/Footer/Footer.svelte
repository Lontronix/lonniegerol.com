<script>
	export let env;
</script>

<footer>
	<p>Copyright &copy; {new Date().getFullYear()} - Lonnie Gerol All Rights Reserved.</p>

	{#if env === "development"}
		<p><a href="https://github.com/lontronix/lonniegerol.com">{ __GIT_MSG__ }</a></p>
	{:else}
		<p><a href="https://github.com/lontronix/lonniegerol.com">View on GitHub</a></p>
	{/if}

</footer>

<style>

	footer {
		margin: auto;
		font-size: 14px;
		text-align: center;
	}

</style>
