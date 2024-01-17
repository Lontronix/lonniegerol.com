<script>
    import * as accentColor from "$lib/Accent-Color/AccentColor";
    import TypedBio from '$lib/Header/TypedBio.svelte'
	import AccentSelector from '$lib/Accent-Color/AccentSelector.svelte';

	let currentAccentColor;
	accentColor.currentAccentColor.subscribe(value => {
		currentAccentColor = value;
	});
</script>

<div>
    <div id="header">
        <h1>Lonnie Gerol</h1>
        <AccentSelector/>
        <TypedBio/>
        <nav>
            <span class="nav-seperator">:</span>
            <a href="/">About</a>
            <span class="nav-seperator">:</span>
            <a href="/apps">Apps</a>
            <span class="nav-seperator">:</span>
            <a href="/blog">Blog</a>
            <span class="nav-seperator">:</span>
            <a href={__RESUME_URL__} target="_blank" rel="noreferrer">Resume</a>
            <span class="nav-seperator">:</span>
        </nav>
    </div>
</div>

<style>
    #header {
        margin: auto;
		font-size: 18px;
		text-align: center;
    }

    #header h1 {
        font-size: 2.0rem;
    }
</style>
