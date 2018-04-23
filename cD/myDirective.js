"use strict"

directiveApp.directive('myDirective', function(){
	let myObject = {};

	myObject.restrict = 'EA';
	myObject.template = '<h3>welome to custom directives!! {{myName}} {{lastName}}</h3>';

	myObject.scope = {
		myName : '@',
		lastName: '='
	}

	return myObject;
});