//... Create your module
var app = angular.module("MenuApp", []);

$(document).ready(function(){
    $("a[rel^='prettyPhoto']").prettyPhoto({
		social_tools: false
	});	
});