"use strict"

routerModule.controller('ThirdPageController',  thirdPageController);

	thirdPageController.$inject = [
		'$scope',
		'$stateParams'
		];

	function thirdPageController(
		$scope,
		$stateParams
		){

		$scope.pageNum = 'first';
		$scope.firstParam = $stateParams.a;
		$scope.secondParam = $stateParams.b;
	};