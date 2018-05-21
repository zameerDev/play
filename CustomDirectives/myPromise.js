customDir.factory('myFacSer', ['$http', '$q', function($http, $q){

	return {
		mylocation: mylocation
	};

	function mylocation(){
		var defer = $q.defer();
		$http.get('https://api.openweathermap.org/data/2.5/weather?q=Hyderabad&APPID=7def8a09921c79c4e299403b906fd961')
		.then(function(response){
			defer.resolve(response);
		}).catch(function(e){
			defer.reject('Error', e);
		});
		return defer.promise;
	}
}])