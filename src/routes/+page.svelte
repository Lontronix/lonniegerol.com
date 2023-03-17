<script>
	import { MetaTags } from 'svelte-meta-tags';
	import Experience from '../lib/Experience.svelte';
	import experience from '../lib/experience.json';
	import * as accentColor from "$lib/Accent-Color/AccentColor.ts";

	let currentAccentColor;
	accentColor.currentAccentColor.subscribe(value => {
		currentAccentColor = value;
	});
</script>


<MetaTags
	title="Lonnie Gerol"
	description="Lonnie's Corner of the Internet"
	openGraph={{
		type: "website",
		title: "Lonnie Gerol",
		description: "Lonnie's Corner of the Internet",
		images: [{
			url: "https://s3.csh.rit.edu/lontronix-website/lonnie-hero.jpeg",
			width: 2400,
			height: 1260,
			alt: "Lonnie Standing on the peak of a mountain"
		}]
	}}
/>
<main>
	<h1>About</h1>
	<div>
		<img src="https://s3.csh.rit.edu/lontronix-website/me.jpeg" alt="Lonnie smiling" id="lonnie-photo" width=250 height=250>
		<p>Hi I'm Lonnie <span>👋🏻</span></p>
		<p>I'm an iOS developer and fourth year Computer Science Major at the <a id="rit-url" href="https://rit.edu"> Rochester Institute of Technology</a>.</p>
		<p>
			At RIT, I'm involved with <a id="csh-url" href="https://csh.rit.edu">Computer Science House</a> where I help manage our public facing websites and our <a href="https://www.youtube.com/watch?v=g9F-1vw0m-o"> internet connected vending machines.</a>
		</p>

		<p>In my free time, I can be found running, cycling or caring for my fish (I have 4 Black Phantom Tetra and 4 Neon Tetras).</p>

		<p>You can find me in the following places around the web:</p>
		<ul>
			<li>GitHub: <a href="https://github.com/lontronix">@Lontronix</a></li>
			<li>Twitter: <a href="https://twitter.com/lontronix">@Lontronix</a></li>
			<li>Mastodon: <a href="https://iosdev.space/@lonnie">@lonnie@iosdev.space<a></li>
			<li>LinkedIn: <a href="https://www.linkedin.com/in/lonniegerol/">Lonnie Gerol</a></li>
			<li>Email: lonnie (at) lonniegerol.com</li>
		</ul>

		<h1>Experience</h1>
		<p>If you would prefer to view my resume, you can find that
			<a id="resume-url" href={`https://resume.lonniegerol.com/${currentAccentColor.name}`} target="_blank">here</a>
		</p>

		<p>A brief overview of my work experience as a Software Engineer:</p>
		<div>
			{#each experience.companies as job}
				<Experience
					experience={
						{
							companyName: job.companyName,
							companyWebsite: job.companyWebsite,
							jobTitle: job.jobTitle,
							photoSrc: `https://s3.csh.rit.edu/lontronix-website/${job.photoSrc}`
						}
					}
				>
				<p style="display: inline;">
					{job.description}
				</p>
				</Experience>
			{/each}
		</div>

	</div>
</main>

<style>

	#lonnie-photo {
		float: right;
		margin-left: 50px;
		border-radius: 10px;
	}

	#rit-url {
		text-decoration: underline;
		text-decoration-color: orange;
		text-underline-offset: 2.0px;
		text-decoration-thickness: 0.2em;
		text-decoration-skip-ink: none;
	}

	#csh-url {
		text-decoration: underline;
		text-decoration-color: #B0197E;
		text-underline-offset: 2.0px;
		text-decoration-thickness: 0.2em;
		text-decoration-skip-ink: none;
	}

	#resume-url {
		text-decoration: underline;
		text-decoration-color: var(--accentColor);
		text-underline-offset: 2.0px;
		text-decoration-thickness: 0.2em;
		text-decoration-skip-ink: none;
	}

	@media only screen and (max-width: 480px) {
		#lonnie-photo {
			margin: auto;
			float: none;
			height: 100%;
			width: 100%;
			margin-left: 0px;
		}
	}

</style>
