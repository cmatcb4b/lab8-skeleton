var projects = require("../projects.json")
/*
 * GET home page.
 */

 exports.view = function(req, res){
 	var randomNumber = Math.random();

 	if (randomNumber > .5) {
 		res.render("index", projects);
 	} else {
 		res.render("index_alternate", projects)
 	}
 };