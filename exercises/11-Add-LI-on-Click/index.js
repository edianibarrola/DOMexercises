let button = document.querySelector("#superDuperButton");
button.addEventListener("click", function() {
	//your code here
	var ulElement = document.querySelector("ul");
	var newLi = document.createElement("li");
	var liText = document.createTextNode("Fourth element");
	newLi.appendChild(liText);
	ulElement.appendChild(newLi);
});
