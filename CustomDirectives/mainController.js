customDir.controller('mainController', ['$scope', 'myFacSer', function($scope, myFacSer){
	$scope.name = 'zameer';

	$scope.fetchLocation = function(){
		myFacSer.mylocation().then(function(result){
			console.log(result,'result');
			$scope.location = result;
		}, function(error){
			console.log(error);
		});
	};
	$scope.fetchLocation();

}]);