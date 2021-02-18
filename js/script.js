var navBar = document.getElementById("collapsableNav")
var navToggler = document.getElementById("togglerButton")
var pageTitle = "Home"
var overlay = document.getElementById("overlay")
var screenHeight = window.innerHeight



var buildBoardPage = function () {
	var html = "<div class='row'>" + "<div class='col-xs-12 col-sm-12 heading'>";
		html += "<h1 class='text-center'>" + "Executive Board" + "</h1>";
		html += "</div>"
	var page = document.getElementById("mainContent");
	for (i=0; i < board.length; i++) {
		html += "<div class = 'col-xs-12 col-sm-6 contentBox'>" + "<div class='content text-center'>"
		html += "<span class='execInfo'>" + "<h2>" + board[i].name + "</h2>";
		html += board[i].occupation + "<br />";
			if (board[i].fta_leadership) {
				html += "FTA Leadership" + "<br />";

			}
		
		html += "</span>" + "</div>" + "</div>";
	}
	html += "</div>" ;
	$(page).html(html);
	$(".nav-link").removeClass("active");
	$("#execBoardLink").addClass("active");
	closeNav();

}

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
	$(".smallFooterLink>a").removeClass('active');
	$(pageId).addClass('active');
$.get(snippetHtml, function( data ) {
  $( "#mainContent" ).html( data );
});}

overlay.addEventListener("click", closeNav);

var navHeading = document.getElementById("fta-full");

var board = [{name:"Connie Verhulst", occupation:"president", fta_leadership: true},
{name:"Robert Basset", occupation:"vice president", fta_leadership: true},
{name:"Robb Lash", occupation:"secretary", "fta_leadership": true},
{name:"Troy Liggins", occupation:"treasurer", "fta_leadership": true},
{name:"Deborah Garland", occupation:"elementary director", "fta_leadership": false},
{name:"Margie Brynda", occupation:"elementary director", "fta_leadership": false},
{name:"Collen Gerke", occupation:"elementary director", "fta_leadership": false},
{name:"Barbi Maddox", occupation:"elementary director", "fta_leadership": false},
{name:"Amy Aydin", occupation:"middle school director", "fta_leadership": false},
{name:"Jodi Dominguez", occupation:"middle school director", "fta_leadership": false},
{name:"Glennon Poirier", occupation:"high school director", "fta_leadership": false},
{name:"Mark Schulte", occupation:"high school director","fta_leadership": false}]