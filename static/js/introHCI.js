'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$("#testjs").click(function(e) {
		$("#testjs").text("Please wait...");
		$(".jumbotron p").toggleClass("active");
	//	$(".jumbotron p").addClass("active");
		$('.jumbotron h1').text("Ihab Salameh");
	});

	// Add any additional listeners here
	// example: $("#div-id").click(functionToCall);
	$("a.thumbnail").click(projectClick);
}
function projectClick(e) { 
	// cancel default action
	e.preventDefault();
	// record clicks for debugging
	//console.log("Project clicked");
	// if a listener exist, $(this) is the element that fired the event
	
	var projectTitle = $(this).find("p").text();
   var jumbotronHeader = $(".jumbotron h1");
   jumbotronHeader.text(projectTitle);

   var containingProject = $(this).closest(".project");
  	$(".project").fadeIn()
	var description = $(containingProject).find(".project-description");
   if (description.length == 0) {
      $(containingProject).append("<div class='project-description'><p>Description of the project.</p></div>"); 
   }
   else {
       description.html("<p>Stop clicking on me! You just did it at " + (new Date()) + "</p>");
   }
 
    // In an event handler, $(this) refers to 
    // the object that triggered the event 
   // $(this).css("background-color", "#7fff00");
}