"use strict"

angular.module('RouterModule')
	.controller('SecondPageController', secondPageController);


	secondPageController.$inject = [
		'$scope',
		'$stateParams'
	];

	function secondPageController(
		$scope,
		$stateParams
		){
		$scope.pageNum = 'second';
		$scope.a = $stateParams.a;
		$scope.b = $stateParams.b;
	}