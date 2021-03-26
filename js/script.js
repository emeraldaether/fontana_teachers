var archiveButton = document.getElementById("archive-menu");
var body = document.getElementsByTagName('body')[0];
var contentLinks, navLinks, target;
var headerNavList = document.getElementById('nav-list');
var homePage = window.location.href;
var mainContent = document.getElementById('mainContent')
var navBar = document.getElementById("collapsableNav");
var overlay = document.getElementById("overlay");
var pageTitle = "Home";
var screenHeight = window.innerHeight;
var screenWidth = window.innerWidth;
 	navLinks = document.getElementsByClassName('internal-link');

	document.title = pageTitle;

function toArray(obj) {
	var array = [];
	for (i = obj.length >>> 0; i--;) 
		{
		array[i] = obj[i];
	}
	return array;
}

window.addEventListener("load", function() {	
	if (mainContent.childNodes[0].nodeValue = " ") {
		buildNewPage(0);
		$('#homeLink').addClass('active');
	}	 			
}, false)

function linkArrays () {
	var contentLinks = document.getElementsByClassName('internal-home-link');
	var linkArray = toArray(navLinks);
	var contentLinksArray = toArray(contentLinks);
	    combinedArray = linkArray.concat(contentLinksArray);
	    for (i=0; i < combinedArray.length; i++) {
	    	console.log(i + ". " + combinedArray[i].id)
	    }
	    console.log("-------------------")

}

body.addEventListener("click", function(e) {
	 
	 	target = e.target;
	var elParent = target.parentNode;
		if (target == contractPageLink || target == contractPageLink2) {
		contractPage();
	} else {if (target.nodeName == "A") {
		if ($(e.target).hasClass('frame-link')) {
		iFrameBuilder(e);} else {
		for (i=0; i<combinedArray.length; i++)
			if (combinedArray[i].id == target.id) {
				if (i != 2) {
					buildNewPage(i);
				} else {
					buildBoardPage();
				};}
			}
	};}

})



function buildDropdown (subject) {
	var dropdown = subject[0].name;
	var year = 2021;
	var html = "<button class='btn dropdown-toggle auto-margin' data-toggle='dropdown'>";
		html += subject[0].displayName + "<span class='caret'></span></button>" + "<ul class='dropdown-menu' id='" + subject[0].id + "'>";
	if (dropdown == "contract") {
		html += "<li><a href='#' id='contract-page-link'>" + "View On New Page" + "</a></li>";
	
	} else if (dropdown == "archive" || dropdown == "ftt" || dropdown == "mou") {
		html += "<li class='dropdown-header'>" + (year - 1) + " - " + year + "</li>";
		if (dropdown == "archive" || dropdown == "mou") {
			year--;};
		};
	for (i=1; i<subject.length; i++) {
		var month = subject[i].month;
		var day = subject[i].day;
		var transition = subject[i].transition;
		var yearChange = subject[i].newYear;
		html += "<li><a href=" + subject[i].url + " class='dropdown-item " + dropdown + "-link' target='_blank'>";
		if (dropdown == "contract") {
			if (i != 1){
				if (i < 31) {
					html += "article";
				} else {
					html += "appendix";
				};
					html += " " + subject[i].id + " - ";
			};
			html += subject[i].name + "</a></li>";
			} else if (dropdown == "archive") {
					html += month + " " + subject[i].year;
					html += "</a></li>";
					if (subject[i].transition == true){
						html += "<li class='dropdown-header'>" + (year - 1) + " - " + year;
						year--;
						html += "</li>"
					 };
				} else if (dropdown == "ftt") {
					html += month + " " + day + ", " + year + "</a></li>"
						if (yearChange == true){
							year--
						}
						if (transition == true) {
					html += "<li class='dropdown-header'>" + (year - 1) + " - " + year + "</li>"
						}
				} else if (dropdown == "mou") {
					html += subject[i].name + "</a></li>";
					if (subject[i].transition == true) {
						html += "<li class='dropdown-header'>" + (year - 1) + " - " + year + "</li>";
						year--;
					}
				}
			
		}
		$(subject[0].target).html(html);
		contractPageLink = document.getElementById('contract-page-link');
		contractPageLink2 = document.getElementById('contract-page-link-2')
}


	 

function contractPage() {
		var html = "<div class='row'>" + "<h1 class='text-center heading'>" + "Contract" + "</h1>";
			html += "<div class='standard-spacing'></div>" + "<div class='infoBox no-padding' id='contract-box'>";
			html += "<div class='col-xs-12 col-sm-12 text-center'>" + "<a href='" + contractInfo[1].url;
			html += "' class='contract-link' target='_blank'>" + contractInfo[1].name + "</a></div>";
		for (i=2; i<contractInfo.length; i++) {
			html += "<div class='col-xs-12 col-sm-12 text-center'><a href='" + contractInfo[i].url;
			html += "' class='contract-link' target='_blank'>";
			if (i<31){	
			html += "Article ";}
			else {
			html += "Appendix ";	
			}; 
			html += contractInfo[i].id + " - " + contractInfo[i].name + "</a></div>";
		};
			html += "</div></div>";
		$(mainContent).html(html);
		$('.active').removeClass('active')
		window.scrollTo(0,0);
}

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

function buildNewPage(array) {
	closeNav();
	$('.active').removeClass('active')
	if (array < 6) {
		document.title = snippet[array].title;		
		$(target).addClass('active');
	} else {
		if (document.title == "Home") {
			document.title = snippet[array].title;
		} else if (document.title == "") {

		}
	}
	var html = snippet[array].url;
	$.get(html, function(data) {
		$(mainContent).html(data);
		if (array == 0) {
		buildDropdown(contractInfo);
		buildDropdown(fontananArchives);		
} else if (document.title == "Negotiations") {
	buildDropdown(fttNeg)
	buildDropdown(mouNeg)
}
		linkArrays();	
	})
	
window.scrollTo(0,0)
	
}


function iFrameBuilder(e) {
	target = e.target;
	var frameContent = document.getElementsByClassName('frame-link');
	var frameHeading = target.childNodes[0].nodeValue;
	if (document.title == "Calendars") {
		var iFrame = document.getElementById('calendar-box');
		var source = calendarUrl;
	} else if (document.title == "Frequently Asked Questions") {
		var iFrame = document.getElementById('answer-box');
		var source = answerInfo;
	}
	for (i=0; i<frameContent.length; i++) {
		if (target == frameContent[i]) {
			var innerContent = source[i];
		}
	}
	var html = "<div class='col-xs-12 col-sm-10 auto-margin'><h1 class='text-center heading-no-shadow'>" + frameHeading + "</h1>";
	if (innerContent != answerInfo[2]) {
		if (innerContent != answerInfo[4]) {
		html += "<div class='text-center externalLink'><a href='" + innerContent + " target='_blank'>";
		html += "Click Here to Open in New Page</a></div><iframe src='" + innerContent + "frameborder='0'";
		html += " height='650px' width='100%'></iframe></div>"} 
			else {
			html += "<div class='line-lg'></div>";
			for (i=0; i<overageLink.length; i++) {
				html += "<div class='col-lg-12 auto-margin text-center faq-nav'>" + "<a href=" + "'" + overageLink[i].url + "'";
				html += " target=_blank>" + overageLink[i].name + "</a></div>"}
	};} else {
		html += "<div class='line-lg'></div>";
		html += "<div class='col-lg-8 auto-margin text-center'>" + "<p>" + "Part Time Dues are $750" + "</p>";
		html += "<p>" + "Full Time Dues are $1350" + "</p></div>";

	}
		$(iFrame).html(html);
		$('.frame-link').removeClass('active');
		$(target).addClass('active');
		console.log(innerContent)
}


// function buildCalendar(heading, array) {
// 	var calendar = document.getElementById("calendar-box");
// 	var html =  "<div class='col-xs-12 col-sm-10 auto-margin'>" + "<h1 class='text-center heading-no-shadow'>" + heading + "</h1>";
// 		html += "<div class='text-center externalLink'>" + "<a href=" + calendarUrl[array] + " target='_blank'>";
// 		html += "Click Here to Open in New Page" + "</a></div>" + "<iframe src=" + calendarUrl[array];
// 		html += "frameborder = '0 '" + "width='100%' height='650px'" + "</iframe></div>";
// 	$(calendar).html(html);
// 	$('.calendar-nav').removeClass('active');
// 	var activeLink = '.calendar-nav' + ':nth-child(' + (array + 1) + ")";
// 	$(activeLink).addClass('active')
// }

// function buildAnswer(heading, array) {
// 	var answer = document.getElementById("answer-box")
// 	var html = "<div class='standard-spacing'></div>" + "<div class='col-xs-12 col-sm-10 auto-margin'>";
// 		html += "<h1 class='text-center heading-no-shadow' id='answer-heading'>" + heading + "</h1>";
// 		if (array != 2){
// 			if (array != 6){				
// 			html += "<div class='d-none d-lg-block'>" + "<div class='text-center externalLink'>" + "<a href=" + answerInfo[array] + " target='_blank'>";
// 			html += "Click Here to Open in New Page" + "</a></div>" + "<iframe src=" + answerInfo[array];
// 			html += "frameborder = '0' " + "width='100%' height='650px'" + "</iframe></div></div>";
// 			$('#answer-heading').addClass('d-none');
// 		} 
// 		else {
// 			html += "<div class='line-lg'></div>";
// 			for (i=0; i<overageLink.length; i++) {
// 				html += "<div class='col-lg-12 auto-margin text-center faq-nav'>" + "<a href=" + "'" + overageLink[i].url + "'";
// 				html += " target=_blank>" + overageLink[i].name + "</a></div>"
// 					}
// 				html += "</div>"

// 		}
// 	} else {
// 			html += "<div class='line-lg'></div>";
// 			html += "<div class='col-lg-8 auto-margin text-center'>" + "<p>" + "Part Time Dues are $750" + "</p>";
// 			html += "<p>" + "Full Time Dues are $1350" + "</p></div>";
// 	}
// 	$(answer).html(html);
// 	$('.faq-nav').removeClass('active');
// 	var activeLink = '.faq-nav' + ':nth-child(' + (array + 1) + ")";
// 	$(activeLink).addClass('active')
// }

var buildBoardPage = function () {
	var html = "<div class='row'>" + "<div class='col-xs-12 col-sm-12'>";
		html += "<h1 class='text-center heading'>" + "Executive Board" + "</h1></div>" + "<div class='standard-spacing'></div>";
	for (i=0; i < board.length; i++) {
		html += "<div class = 'col-xs-12 col-sm-8 col-md-6 auto-margin contentBox'>" + "<div class='infoBox text-center'>"
		html += "<span class='execInfo'>" + "<h2>" + board[i].name + "</h2>";
		html += board[i].occupation + "<br />";
			if (board[i].fta_leadership) {
				html += "FTA Leadership" + "<br />";
			}	
		html += "</span>" + "</div>" + "</div>";
	}
		html += "</div>" ;
		$(mainContent).html(html);
		$(".nav-link").removeClass("active");
		$("#execBoardLink").addClass("active");
		closeNav();
		document.title = "Executive Board";
		window.scrollTo(0,0);

}
