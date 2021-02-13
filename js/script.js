var navBar = document.getElementById("collapsableNav")
var navToggler = document.getElementById("togglerButton")
var pageTitle = "Home"


// var getObject = new XMLHttpRequest()

// var boardMembers = function() {
// var boardMembersUrl = getObject.open("GET", "js/board.json", true);
// getObject.send();
// console.log (boardMembersUrl);
// responseHandler (JSON.parse(request.responseText));
// }


document.title = pageTitle
// console.log(boardMembers[1].name)

$.get('snippets/home-snippet.html', function( data ) {
  $( "#mainContent" ).html( data );
  
});

$("#homeLink").addClass("active");

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

function buildPage (snippetHtml, pageTitle, pageId){
	document.title = pageTitle
	$(".nav-link").removeClass('active')
	$(pageId).addClass('active')
$.get(snippetHtml, function( data ) {
  $( "#mainContent" ).html( data );
  console.log(pageTitle)
  console.log(pageId)
});}
