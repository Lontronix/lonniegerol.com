<script>
	import { MetaTags } from 'svelte-meta-tags';
</script>

<MetaTags
	title="Lonnie's Gerol - My Apps"
	description="Lonnie's Corner of the Internet"
	openGraph={{
		type: "website",
		title: "Lonnie's Apps",
		description: "The apps lonnie has worked on.",
		images: [{
			url: "https://s3.csh.rit.edu/lontronix-website/lonnie-hero.jpeg",
			width: 2400,
			height: 1260,
			alt: "Lonnie Standing on the peak of a mountain"
		}]
	}}
/>
<main>
  <h1>My Apps</h1>

  <div id="relog">
    <div id="relog-icon">
      <img alt="The app icon for Relog" src="https://s3.csh.rit.edu/lontronix-website/apps/Relog.png"/>
    </div>
    <div id="relog-info">
      <h1>Relog</h1>
      <h2>An Elegant Task Logger</h2>
      <img id="relog-screenshots" alt="Relog screenshots" src="https://s3.csh.rit.edu/lontronix-website/apps/relog-screenshot-combo.png"/>
      <p>Relog is an app for iOS, iPadOS, and macOS that lets you keep track of when you last did the things that are important to you.</p>
      <a href="https://apps.apple.com/us/app/relog-task-logger/id6462759656">
        <img alt="Click this button to download Relog on the App Store" src="https://s3.csh.rit.edu/lontronix-website/apps/app-store-badge-black.svg">
      </a>
    </div>
  </div>

</main>

<style>

  #relog-info {
    overflow: hidden;
  }

  #relog h1 {
    margin-top: 0px;
    margin-bottom: 0px;
    color: rgb(255, 45, 85);
  }

  #relog h2 {
    color: white;
    margin-top: 5px;
  }

  #relog-screenshots {
    width: 85%;
  }

  #relog-icon {
    float: left;
    margin-right: 20px;
  }

  #relog-icon img {
    height: 150px;
    border-radius: 20px;
  }

  @media (max-width: 475px) {
    #relog-icon {
      float: none;
      margin-right: 0px;
    }

    #relog-info {
      margin-top: 10px;
      margin-left: 5px;
    }
  }

  @media (prefers-color-scheme: light) {
    #relog h2 {
      color: black;
    }
  }

</style>