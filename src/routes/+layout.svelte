<script>
	import * as accentColor from "$lib/Accent-Color/AccentColor.ts";
	import Ribbon from "$lib/Ribbon.svelte";
	import Header from "$lib/Header/Header.svelte";
	import Footer from "$lib/Footer/Footer.svelte";
	import "../styles/app.css";

	export let data

	let currentAccentColor;
	accentColor.currentAccentColor.subscribe(value => {
		currentAccentColor = value;
	});
</script>

<svelte:head>
	<meta name="theme-color" content="{currentAccentColor.themeHexCode}" />
	<link rel="icon" href="/favicon/lonnie-favicon-{currentAccentColor.name}.png" />
</svelte:head>

<div style="--accentColor: {currentAccentColor.accentHexCode}; --themeColor: {currentAccentColor.themeHexCode}" id="container">

	{#if data.env === "development"}
		<Ribbon text="Development"/>
	{/if}

	<div id= "left-strip"></div>
	<div>
		<Header/>
			<main>
				<slot/>
			</main>

			<Footer env={data.env}/>

		</div>
	<div id="right-strip"></div>
</div>

<style>

	#left-strip {
		position: fixed;
		left: 0;
		top: 0;
		height: 100%;
		width: 3px;
		background-color: var(--themeColor);
	}

	#right-strip {
		position: fixed;
		right: 0;
		top: 0;
		height: 100%;
		width: 3px;
		background-color: var(--themeColor);
}

</style>
