var projects = require('../projects.json');

/*
 * GET home page.
 */

exports.view = function(request, response){
	projects["viewAlt"] = false;
  	response.render('index', projects);
};

exports.viewAlt = function(request, response) {
	projects["viewAlt"] = true;
	console.log(projects["viewAlt"]);
	response.render('index', projects);
};