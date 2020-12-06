window.onload = function() {
	console.log("The website was loaded...");
	let countries = ["USA", "France", "Italy", "Brazil", "Colombia", "Belize", "Venezuela"];

	// your code here
	var selection = document.querySelector("#mySelect");

	for (let i = 0; i < countries.length; i++) {
		var newOption = document.createElement("option");
		newOption.value = countries[i];
		newOption.innerHTML = countries[i];
		selection.appendChild(newOption);
		console.log(newOption);
	}
};
