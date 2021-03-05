var navBar = document.getElementById("collapsableNav");
var pageTitle = "Home";
document.title = pageTitle
var overlay = document.getElementById("overlay");
var screenHeight = window.innerHeight;
var archiveButton = document.getElementById("archive-menu");
var screenWidth = window.innerWidth;

function buildContractDropdown(){
	var html = "<button class='btn btn-primary dropdown-toggle d-none d-md-block auto-margin' data-toggle='dropdown'>";
		html += "Contract Details" + "<span class='caret'></span>" + "<ul class='dropdown-menu' id='contract-menu'>"
		html += "<li><a href='#' onclick='mobilePhoneContractPage()'>" + "View On New Page" + "</a></li>";
	for (i=0; i<contractInfo.length; i++) {
		html += "<li><a href=" + contractInfo[i].url + " class='dropdown-item contract-link' target='_blank'>"; 
		if (i != 0){
			if (i < 30) {
		html += "article";
		} 
	else {
		html += "appendix";
	}
		html += " " + contractInfo[i].id + " - "; 
};
		html += contractInfo[i].name + "</li></a>";
	};
	$('#contract-dropdown').html(html);
}

function mobilePhoneContractPage() {
		var html = "<div class='row'>" + "<h1 class='text-center heading'>" + "Contract" + "</h1>";
			html += "<div class='infoBox no-padding' id='contract-box'>" + "<div class='col-xs-12 col-sm-12 text-center'>";
			html += "<a href='" + contractInfo[0].url + "' class='contract-link' target='_blank'>";
			html += contractInfo[0].name + "</a></div>";
		for (i=1; i<contractInfo.length; i++) {
			html += "<div class='col-xs-12 col-sm-12 text-center'><a href='" + contractInfo[i].url;
			html += "' class='contract-link' target='_blank'>";
			if (i<30){	
			html += "Article ";}
			else {
			html += "Appendix ";	
			}; 
			html += contractInfo[i].id + " - " + contractInfo[i].name + "</a></div>";
		};
			html += "</div></div>";
		$('#mainContent').html(html);
}


$.get(snippet[0].url, function(data) {
	 $("#mainContent").html(data); 
	 buildContractDropdown();
	});
	$(snippet[0].pageId).addClass("active");

function openNav () {

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
  if (array == 0) {
	buildContractDropdown();
};
});
}

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


