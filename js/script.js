var navBar = document.getElementById("collapsableNav")
var navToggler = document.getElementById("togglerButton")
var pageTitle = "Home"
var overlay = document.getElementById("overlay")
var screenHeight = window.innerHeight
var getObject = new XMLHttpRequest()
console.log(screenHeight)
var boardMembers = function() {
var boardMembersUrl = getObject.open("GET", "js/board.json", true);
getObject.send();
console.log (boardMembersUrl);
responseHandler (JSON.parse(request.responseText));
}




document.title = pageTitle
// console.log(boardMembers[1].name)

$.get('snippets/home-snippet.html', function( data ) {
  $( "#mainContent" ).html( data );
  
});

$("#homeLink").addClass("active");

function openNav () {
var screenWidth = window.innerWidth;
overlay.style.display = "block";
if (screenWidth > 566) 	{
	navBar.style.width = "300px";

}
		else {
			navBar.style.width = "175px";
		}
}


function closeNav () {
	navBar.style.width = "0px";
	overlay.style.display = "none";
}




function buildPage (snippetHtml, pageTitle, pageId){
	closeNav();
	document.title = pageTitle;
	$(".nav-link").removeClass('active');
	$(pageId).addClass('active');
$.get(snippetHtml, function( data ) {
  $( "#mainContent" ).html( data );
});}
console.log(overlay)
overlay.addEventListener("click", closeNav)

