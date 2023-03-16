<script>
	export let experience = {
		companyName: "Apple",
		companyWebsite: "https://apple.com",
		jobTitle: "Software Engineering Intern",
		photoSrc: "src/assets/bryx.jpg",
		description: ""
	}

	export let accentColor = "#000000";
</script>

<div class="experience-card">
	<img
		src={experience.photoSrc}
		alt={`${experience.companyName}'s logo`}
		width=100px height=100px>
	<h3><a href="{experience.companyWebsite}">{experience.companyName}</a> | {experience.jobTitle}</h3>
	<slot/>
</div>

<style>

	.experience-card {
		display: block;
		min-height: 100px;
		margin-bottom: 50px;
	}

	h3 {
		margin-top: 10px;
		margin-bottom: 5px;
	}

	a {
		text-decoration: none;
	}

	img {
		float: left;
		border-radius: 10px;
		margin-right: 15px;
	}

	.experience-card {
		margin-bottom: 40px;
		text-align: left;
	}

	@media only screen and (max-width: 480px) {
		img {
			float: none;
			display: block;
		}
	}

</style>

