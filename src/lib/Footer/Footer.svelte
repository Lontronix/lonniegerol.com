<script>
	import GitInfo from "./gitInfo.svelte";
</script>
<footer>
	<p>Copyright &copy; {new Date().getFullYear()} - Lonnie Gerol All Rights Reserved.</p>
	<GitInfo/>
</footer>

<style>

	footer {
		margin: auto;
		font-size: 14px;
		text-align: center;
	}

</style>
