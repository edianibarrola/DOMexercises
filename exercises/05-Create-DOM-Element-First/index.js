var elem = document.createElement("H1");
elem.innerHTML = "Hello World";
document.querySelector("#myDiv").appendChild(elem);

//Your code here
// Don'change the code above
var newPar = document.createElement("p");
newPar.innerHTML = "Hello world";
newPar.style.background = "yellow";

document.querySelector("#myDiv").appendChild(newPar);
