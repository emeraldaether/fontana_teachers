var navBar = document.getElementById("collapsableNav");
var navToggler = document.getElementById("togglerButton");
var pageTitle = "Home";
document.title = pageTitle
var overlay = document.getElementById("overlay");
var screenHeight = window.innerHeight;
var calendarUrl = [
				"https://nebula.wsimg.com/518cd4c2d9ee267321dcc5dfb1792e4c?AccessKeyId=6A70C08022DEA068CA48&disposition=0&alloworigin=1", 
				"https://nebula.wsimg.com/a02a54c6c369bc19837afb7b379b4000?AccessKeyId=6A70C08022DEA068CA48&disposition=0&alloworigin=1",
				"https://nebula.wsimg.com/3d7c983534c782a82991b2ff70ac8d86?AccessKeyId=6A70C08022DEA068CA48&disposition=0&alloworigin=1",
				"https://nebula.wsimg.com/930b0761fea79f6e4647875b5041d1d0?AccessKeyId=6A70C08022DEA068CA48&disposition=0&alloworigin=1",
				"https://nebula.wsimg.com/b61f0e9acbf9d0bfe9eef9ead4854431?AccessKeyId=6A70C08022DEA068CA48&disposition=0&alloworigin=1"
				]

var board = [
			 {name:"Connie Verhulst", occupation:"president", fta_leadership: true},
			 {name:"Robert Basset", occupation:"vice president", fta_leadership: true},
			 {name:"Robb Lash", occupation:"secretary", fta_leadership: true},
			 {name:"Troy Liggins", occupation:"treasurer", fta_leadership: true},
			 {name:"Deborah Garland", occupation:"elementary director", fta_leadership: false},
			 {name:"Margie Brynda", occupation:"elementary director", fta_leadership: false},
			 {name:"Collen Gerke", occupation:"elementary director", fta_leadership: false},
			 {name:"Barbi Maddox", occupation:"elementary director", fta_leadership: false},
			 {name:"Amy Aydin", occupation:"middle school director", fta_leadership: false},
			 {name:"Jodi Dominguez", occupation:"middle school director", fta_leadership: false},
			 {name:"Glennon Poirier", occupation:"high school director", fta_leadership: false},
			 {name:"Mark Schulte", occupation:"high school director", fta_leadership: false}]

var snippet = [
			 {url:"snippets/home-snippet.html", id:"#homeLink", title:"Home"},
			 {url:"snippets/about-snippet.html", id:"#aboutUsLink", title:"About Us"},
			 {url:"snippets/calendar-snippet.html", id:"#calendarLink", title:"Calendars"},
			 {url:"snippets/faq-snippet.html", id:"#faqLink", title:"F.A.Q.'s"},
			 {url:"snippets/covid-snippet.html", id:null, title:"Covid-19 Resources"}
]

$.get(snippet[0].url, function(data) {
	 $("#mainContent").html(data); 
	});
	$(snippet[0].id).addClass("active");

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

window.addEventListener("resize", function (){
	if (window.innerWidth > 992){
		overlay.style.display = "none"
		navBar.style.width = "0px"
	}
})
overlay.addEventListener("click", closeNav);
window.addEventListener("resize", function (){
	if (window.innerWidth < 992) {
		var calendar = document.getElementById("calendar-box");
			$(calendar).html(" ");
		$('.calendar-nav').removeClass('active')

	}
})
/*/////////////////////////////////////////////////////////*/
/*/////FUNCTIONS FOR DYNAMICALLY LOADING CONTENT///////////*/
/*/////////////////////////////////////////////////////////*/

var buildNewPage = function(array) {
	closeNav();
	document.title = snippet[array].title;
	var pageId = snippet[array].id;
	var html = snippet[array].url;
	$(".nav-link").removeClass('active');
	$(".smallFooterLink>a").removeClass('active');
$(pageId).addClass('active');
$.get(html, function(data) {
  $("#mainContent").html(data);
});}

function buildCalendar(heading, array) {
	var calendar = document.getElementById("calendar-box");
	console.log (calendar)
	var html =  "<div class='col-xs-12 col-sm-10 auto-margin'>" + "<h1 class='text-center heading-no-shadow'>" + heading + "</h1>";
		html += "<div class='text-center externalLink'>" + "<a href=" + calendarUrl[array] + " target='_blank'>";
		html += "Click Here to Open in New Page" + "</a></div>" + "<iframe src=" + calendarUrl[array];
		html += "frameborder = '0 '" + "width='100%' height='650px'" + "</iframe></div>";
	$(calendar).html(html);
	$('.calendar-nav').removeClass('active');
	var activeLink = '.calendar-nav' + ':nth-child(' + (array + 1) + ")";
	$(activeLink).addClass('active')
}

var buildBoardPage = function () {
	var html = "<div class='row'>" + "<div class='col-xs-12 col-sm-12'>";
		html += "<h1 class='text-center heading'>" + "Executive Board" + "</h1></div>"
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
		document.title = "Executive Board";

}

