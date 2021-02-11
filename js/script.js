var navBar = document.getElementById("collapsableNav")
var navToggler = document.getElementById("togglerButton")
var pageTitle = "Home"
document.title = pageTitle

console.log(pageTitle)
function openNav () {
var screenWidth = window.innerWidth;
console.log(screenWidth);
document.getElementById("overlay").style.display = "block";
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
}

navToggler.addEventListener("blur", closeNav)

