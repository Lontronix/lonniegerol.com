<script>
	import * as accentColor from "$lib/Accent-Color/AccentColor.ts";
	import Ribbon from "$lib/Ribbon.svelte";
	import Footer from "$lib/Footer/Footer.svelte";
	import AccentSelector from '$lib/Accent-Color/AccentSelector.svelte';
	import TypeIt from "typeit";
	import { onMount } from 'svelte';
	import '../styles/app.css';

	export let data

	const bioPossibilities = [
		"Fish Keeper",
		"Apple Fan",
		"Capybara Lover",
		"The West Wing Enjoyer",
		"Professional Boyfriend",
		"Cyclist",
		"Avid Runner",
		"Always Learning"
	];

	let currentAccentColor;
	accentColor.currentAccentColor.subscribe(value => {
		currentAccentColor = value;
	});

	function getRandomBioPossibility() {
		return bioPossibilities[Math.floor(Math.random() * bioPossibilities.length)];
	}

	onMount(() => {
		new TypeIt("#headline", {
		  speed: 50,
		  startDelay: 0,
		})
		.type("// Software Engineer, Computer Science Major, ", { instant: true})
		.type(getRandomBioPossibility())
		.go();
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
		<div id="header">
			<h1>Lonnie Gerol</h1>
			<p id="headline"></p>

			<AccentSelector></AccentSelector>

			<nav>
				<span class="nav-seperator">:</span>
				<a href="/">About</a>
				<span class="nav-seperator">:</span>
				<a href="/blog">Blog</a>
				<span class="nav-seperator">:</span>
				<a href={`https://resume.lonniegerol.com/${currentAccentColor.name}`} target="_blank" rel="noreferrer">Resume</a>
				<span class="nav-seperator">:</span>
			</nav>
		</div>

			<main>
				<slot/>
			</main>

			<Footer env={data.env}/>

		</div>
	<div id="right-strip"></div>
</div>

<style>

	nav {
		margin-block-start: 1em;
		margin-block-end: 1em;
	}

	nav a {
		text-decoration: none;
	}

	.nav-seperator {
		color: var(--accentColor);
	}

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

	#header {
		margin: auto;
		font-size: 18px;
		text-align: center;
	}

	#header h1 {
		font-size: 2.0rem;
	}

</style>
