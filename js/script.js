var navBar = document.getElementById("collapsableNav");
var pageTitle = "Home";
document.title = pageTitle
var overlay = document.getElementById("overlay");
var screenHeight = window.innerHeight;
var archiveButton = document.getElementById("archive-menu");
var calendarUrl = [
				"https://nebula.wsimg.com/518cd4c2d9ee267321dcc5dfb1792e4c?AccessKeyId=6A70C08022DEA068CA48&disposition=0&alloworigin=1", 
				"https://nebula.wsimg.com/a02a54c6c369bc19837afb7b379b4000?AccessKeyId=6A70C08022DEA068CA48&disposition=0&alloworigin=1",
				"https://nebula.wsimg.com/3d7c983534c782a82991b2ff70ac8d86?AccessKeyId=6A70C08022DEA068CA48&disposition=0&alloworigin=1",
				"https://nebula.wsimg.com/930b0761fea79f6e4647875b5041d1d0?AccessKeyId=6A70C08022DEA068CA48&disposition=0&alloworigin=1",
				"https://nebula.wsimg.com/b61f0e9acbf9d0bfe9eef9ead4854431?AccessKeyId=6A70C08022DEA068CA48&disposition=0&alloworigin=1"
				]

var answerInfo = [
					'http://nebula.wsimg.com/63cc26c968abe9135b977f2f41faa845?AccessKeyId=6A70C08022DEA068CA48&disposition=0&alloworigin=1', 
					'http://nebula.wsimg.com/c386cf0a2282a78f269108e8fe78fa90?AccessKeyId=6A70C08022DEA068CA48&disposition=0&alloworigin=1',
					null,
					'http://nebula.wsimg.com/42de1c962e5c94209c040119d6406887?AccessKeyId=6A70C08022DEA068CA48&disposition=0&alloworigin=1',
					null,
					null,
					null
					 ]

var overageLink = [
					{url: 'http://nebula.wsimg.com/8d1ae8b9171cdcebfccfad4a4c903cc9?AccessKeyId=6A70C08022DEA068CA48&disposition=0&alloworigin=1',
					name: 'Excess Student Instructions and Worksheet, Middle - High School'},
					{url: 'http://nebula.wsimg.com/5a8e5c179bdf256ac570cefeadf74b63?AccessKeyId=6A70C08022DEA068CA48&disposition=0&alloworigin=1',
					name: 'Excess Student Instructions and Worksheet, Elementary'},
					{url: 'http://nebula.wsimg.com/e417811b42b83f3add8d26f2c22170d5?AccessKeyId=6A70C08022DEA068CA48&disposition=0&alloworigin=1',
					name: 'Excess Student Timesheet'}
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
			 {id: 90, url:"snippets/home-snippet.html", pageId:"#homeLink", title:"Home"},
			 {id: 91, url:"snippets/about-snippet.html", pageId:"#aboutUsLink", title:"About Us"},
			 {id: 92, url:"snippets/calendar-snippet.html", pageId:"#calendarLink", title:"Calendars"},
			 {id: 93, url:"snippets/faq-snippet.html", pageId:"#faqLink", title:"F.A.Q.'s"},
			 {id: 94, url:"snippets/covid-snippet.html", pageId:null, title:"Covid-19 Resources"},
			 {id: 95, url:"snippets/fontanan-snippet.html", pageId:"#fontanan", title:"Fontanan Archives"}
]

$.get(snippet[0].url, function(data) {
	 $("#mainContent").html(data); 
	});
	$(snippet[0].pageId).addClass("active");

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
		var faq = document.getElementById("answer-box")
		var calendar = document.getElementById("calendar-box");
			$(calendar).html(" ");
			$(faq).html(" ");
		$('.calendar-nav').removeClass('active')
		$('.faq-nav').removeClass('active')

	}
})

/*/////////////////////////////////////////////////////////*/
/*/////FUNCTIONS FOR DYNAMICALLY LOADING CONTENT///////////*/
/*/////////////////////////////////////////////////////////*/

var buildNewPage = function(array) {
	closeNav();
	document.title = snippet[array].title;
	var id = snippet[array].pageId;
	var html = snippet[array].url;
	$(".nav-link").removeClass('active');
	$(".smallFooterLink>a").removeClass('active');
$(id).addClass('active');
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

function buildAnswer(heading, array) {
	var answer = document.getElementById("answer-box")
	var html = "<div class='col-xs-12 col-sm-10 auto-margin'>" + "<h1 class='text-center heading-no-shadow' id='answer-heading'>";
		html += heading + "</h1>";
		if (array != 2){
			if (array != 6){				
			html += "<div class='d-none d-lg-block'>" + "<div class='text-center externalLink'>" + "<a href=" + answerInfo[array] + " target='_blank'>";
			html += "Click Here to Open in New Page" + "</a></div>" + "<iframe src=" + answerInfo[array];
			html += "frameborder = '0' " + "width='100%' height='650px'" + "</iframe></div></div>";
			$('#answer-heading').addClass('d-none');
		} 
		else {
			html += "<div class='line-lg'></div>";
			for (i=0; i<overageLink.length; i++) {
				html += "<div class='col-lg-12 auto-margin text-center faq-nav'>" + "<a href=" + "'" + overageLink[i].url + "'";
				html += " target=_blank>" + overageLink[i].name + "</a></div>"
					}
				html += "</div>"

		}
	} else {
			html += "<div class='line-lg'></div>";
			html += "<div class='col-lg-8 auto-margin text-center'>" + "<p>" + "Part Time Dues are $750" + "</p>";
			html += "<p>" + "Full Time Dues are $1350" + "</p></div>";
	}
	$(answer).html(html);
	$('.faq-nav').removeClass('active');
	var activeLink = '.faq-nav' + ':nth-child(' + (array + 1) + ")";
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


