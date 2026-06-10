const shift = new Tone.PitchShift({
	pitch: 0
}).toDestination();

const player = new Tone.Player({
	url: "audio1.mp3",
	autostart: false,
	buffer: 0,
	onload: ()=> {
		console.log("Audio file loaded and ready!");
	}
})

player.connect(shift);

const urlParams = new URLSearchParams(window.location.search);
const linkValue = urlParams.get("link");

const button = document.getElementById("play");

button.addEventListener("click", async () => {
	await Tone.start();
	if (player.loaded) {
		player.start();
	} else {
		console.log("Still Loading....");
	}
});

