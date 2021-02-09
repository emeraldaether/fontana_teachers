var navBar = document.getElementById("collapsableNav");
var navToggler = document.getElementById("togglerButton")

console.log(navBar);

function openNav () {
	navBar.style.width = "250px";
	console.log(navBar.style.width);
}

function closeNav () {
	navBar.style.width = "0px";
}

navToggler.addEventListener("blur", closeNav)