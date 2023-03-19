<script>
	import { getShortSha, getBranchName } from "../git.js";
</script>

{#if process.env.NODE_ENV === "development"}
	<p><a href="https://github.com/lontronix/lonniegerol.com">{`${getShortSha()} (${getBranchName()})`}</a></p>
{:else}
	<p><a href="https://github.com/lontronix/lonniegerol.com">View on GitHub</a></p>
<p>{/if}
