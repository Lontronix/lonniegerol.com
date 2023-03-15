<script>
	import {
		greenAccent,
		yellowAccent,
		orangeAccent,
		redAccent,
		purpleAccent,
		blueAccent,
		currentAccentColor
	} from "./AccentColor.ts";
	import AccentSelectButton from "./AccentButton.svelte";
</script>

<div>
	<AccentSelectButton accentColor={greenAccent} on:click={() => currentAccentColor.update(() => greenAccent)} />
	<AccentSelectButton accentColor={yellowAccent} on:click={() => currentAccentColor.update(() => yellowAccent)} />
	<AccentSelectButton accentColor={orangeAccent} on:click={() => currentAccentColor.update(() => orangeAccent)} />
	<AccentSelectButton accentColor={redAccent} on:click={() => currentAccentColor.update(() => redAccent)} />
	<AccentSelectButton accentColor={purpleAccent} on:click={() => currentAccentColor.update(() => purpleAccent)} />
	<AccentSelectButton accentColor={blueAccent} on:click={() => currentAccentColor.update(() => blueAccent)} />
</div>
