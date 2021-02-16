var navBar = document.getElementById("collapsableNav")
var navToggler = document.getElementById("togglerButton")
var pageTitle = "Home"
var overlay = document.getElementById("overlay")
var screenHeight = window.innerHeight
var boardUrl = "board.json"

window.addEventListener("resize", function (){
	if (document.documentElement.clientWidth > 992){
		overlay.style.display = "none"
		navBar.style.width = "0px"
	}
})

function getRequestObject() {
	if (global.XMLHttpRequest) {
		return (new XMLHttpRequest());
	};
}

var sendGetRequest =  function(requestUrl, responseHandler, isJsonResponse) {
    var request = getRequestObject();
    request.onreadystatechange = 
      function() { 
        handleResponse(request, 
                       responseHandler,
                       isJsonResponse); 
      };
    request.open("GET", requestUrl, true);}

var buildBoardPage = function (board) {
	sendGetRequest(boardUrl, function (html) {
		for (i=0; i < board.length; i++) {
			html += "<h1>" + board(i).name + "</h1>";
		}
		document.getElementById('mainContent').innerHtml = html;
	})
}

document.title = pageTitle

$.get('snippets/home-snippet.html', function(data) {
  $("#mainContent").html(data);
  
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

function buildPage (snippetHtml, pageTitle, pageId) {
	closeNav();
	document.title = pageTitle;
	$(".nav-link").removeClass('active');
	$(pageId).addClass('active');
$.get(snippetHtml, function( data ) {
  $( "#mainContent" ).html( data );
});}

overlay.addEventListener("click", closeNav);

var navHeading = document.getElementById("fta-full");

