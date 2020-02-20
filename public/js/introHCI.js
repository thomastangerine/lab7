'use strict';
var projects = require('../projects.json');
// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
});

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	// your code here
	console.log(projects["viewAlt"]);
}

$(".likeBtn").click(function() {
	ga("send", "event", "like", "click");
})