var navBar = document.getElementById("collapsableNav")
var navToggler = document.getElementById("togglerButton")
var pageTitle = "Home"
document.title = pageTitle

console.log(pageTitle)
function openNav () {
var screenWidth = window.innerWidth;
console.log(screenWidth);
document.getElementById("overlay").style.display = "block";
pageTitle = "Navigate";
document.title = pageTitle;
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
	document.title = pageTitle;
}

navToggler.addEventListener("blur", closeNav)

