<script>
	import TypeIt from "typeit";
    import { onMount } from "svelte";

    const bioPossibilities = [
		"Fish Keeper",
		"Apple Fan",
		"Capybara Lover",
		"The West Wing Enjoyer",
		"Cyclist",
		"Avid Runner",
		"Always Learning"
	];

    function getRandomBioPossibility() {
		return bioPossibilities[Math.floor(Math.random() * bioPossibilities.length)];
	}

    onMount(() => {
		new TypeIt("#headline", {
		  speed: 50,
		  startDelay: 0,
		})
		.type("// ")
		.type(getRandomBioPossibility())
		.type(", Software Developer, Computer Science Major", { instant: false})
		.go();
	});
</script>

<p id="headline"></p>
