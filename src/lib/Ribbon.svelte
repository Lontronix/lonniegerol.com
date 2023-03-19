<script>
	export let text;
</script>

<div class="ribbon-container">
	<div class="ribbon">{text}</div>
</div>

<style>

	.ribbon-container {
		width: 150px;
		height: 150px;
		overflow: hidden;
		position: absolute;
		top: -5px;
		left: -5px;
	}

	.ribbon::before {
		content: "";
		display: block;
		height: 10px;
		width: 5px;
		background-color: darken(green, 5%);
		position: absolute;
		bottom: 0;
		left: 0;
		z-index: -1;
	}
	.ribbon::after {
		content: "";
		pointer-events: none;
		display: block;
		width: 10px;
		height: 5px;
		background-color: darken(var(--accentColor), 5%);
		position: absolute;
		top: 0;
		right: 0;
		z-index: -1;
	}

	.ribbon {
		pointer-events: none;
		font-family: "JetBrains Mono", monospace;
		width: 200px;
		padding: 15px;
		background-color: var(--accentColor);
		color: #fff;
		text-align: center;
		transform: rotate(-45deg) translate(-28%, -35%);
		box-shadow: 0px 5px 5px rgba(0,0,0,0.4);
		text-transform: uppercase;
		text-shadow: 0 2px 2px rgba(0,0,0,0.4);
	}
</style>
