<script>
	import {currentAccentColor} from "./AccentColor.ts";
	export let accentColor;
	let selected;

	currentAccentColor.subscribe(value => {
		selected = accentColor == value;
	});

</script>

<button
	on:click
	style="--hex: {accentColor.accentHexCode};"
	class={selected ? "button-selected" : ""}
	type="button"/>

<style>
	button {
		padding: 0;
		border: solid;
		border-width: 5px;
		border-radius: 50%;
		width: 25px;
		height: 25px;
		/* margin-left: 4px; */
		/* margin-right: 4px; */
		border-color: var(--hex);
		background-color: var(--hex);
	}
	.button-selected {
		border: solid;
		border-width: 5px;
		background-color: #242424;
		border-color: var(--hex);
	}
	@media (prefers-color-scheme: light) {
		.button-selected {
			background-color: #FFFFF8;
		}
	}
</style>
