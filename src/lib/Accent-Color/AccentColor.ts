import { writable } from 'svelte/store';

/*
	name: used to figure out which resume to grab
	themeColor: used to set the meta property in head
	accentColor: used for everything else
*/
class AccentColor {
	name: string;
	themeHexCode: string;
	accentHexCode: string;

	constructor(name: string, themeHexCode: string, accentHexCode: string) {
		this.name = name;
		this.themeHexCode = themeHexCode;
		this.accentHexCode = accentHexCode;
	}
}

const greenAccent = new AccentColor("green", "#58A941", "#58A941");
const yellowAccent = new AccentColor("yellow", "#CA8B02", "#e5a400");
const orangeAccent = new AccentColor("orange", "#EC7608", "#EC7608");
const redAccent = new AccentColor("red", "#E65453", "#E7514F");
const purpleAccent = new AccentColor("purple", "#A759A8", "#CD5DC6");
const blueAccent = new AccentColor("blue", "#1FA4DB", "#1FA4DB");

const accentColors = [greenAccent, yellowAccent, orangeAccent, redAccent, purpleAccent, blueAccent];

const currentAccentColor = writable(blueAccent);

export { greenAccent, yellowAccent, orangeAccent, redAccent, purpleAccent, blueAccent, currentAccentColor }
