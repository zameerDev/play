"use strict"

routerModule.controller('FirstPageController', firstPageController);

	firstPageController.$inject = [
		'$scope'
		];

	function firstPageController(
		$scope
		){

		$scope.pageNum = 'first';
	};