var navBar = document.getElementById("collapsableNav")
var navToggler = document.getElementById("togglerButton")
var pageTitle = document.title

function openNav () {
var screenWidth = window.innerWidth;
console.log(screenWidth);
document.getElementById("overlay").style.display = "block";
navBar.style.border = "2px solid black"
if (screenWidth > 768) 	{
	navBar.style.width = "200px";

}
		else {
			navBar.style.width = "175px";
		}
}



function closeNav () {
	navBar.style.width = "0px";
	document.getElementById("overlay").style.display = "none";
	navBar.style.border = "0px"
}

navToggler.addEventListener("blur", closeNav)

