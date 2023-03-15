<script>
	import * as accentColor from "$lib/Accent-Color/AccentColor.ts";
	import AccentSelector from '$lib/Accent-Color/AccentSelector.svelte';
	import TypeIt from "typeit";
	import { onMount } from 'svelte';
	import '../styles/app.css';

	const possibilities = [
		"Fish Keeper",
		"Apple Fan",
		"Capybara Lover",
		"The West Wing Enjoyer",
		"Professional Boyfriend",
		"Cyclist",
		"Avid Runner",
		"Tim"
	];

	let currentAccentColor;
	accentColor.currentAccentColor.subscribe(value => {
		currentAccentColor = value;
	});

	function getRandomPossibility() {
		return possibilities[Math.floor(Math.random() * possibilities.length)];
	}

	onMount(() => {
		new TypeIt("#headline", {
		  speed: 50,
		  startDelay: 0,
		})
		.type("// Software Engineer, Computer Science Major, ", { instant: true})
		.type(getRandomPossibility())
		.go();
	});

</script>

<svelte:head>
  <meta name="theme-color" content="{currentAccentColor.themeHexCode}" />
</svelte:head>

<div style="--accentColor: {currentAccentColor.accentHexCode}; --themeColor: {currentAccentColor.themeHexCode}" id="container">

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

			<div id="footer">
				<p>Copyright &copy; {new Date().getFullYear()} - Lonnie Gerol All Rights Reserved.</p>
			</div>
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

#footer {
	margin: auto;
	font-size: 14px;
	text-align: center;
}

</style>
