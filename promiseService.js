app.factory('promService', ['$http', '$q', function($http, $q){
	return {
		getUserDetails: getUserDetails 
	}

	function getUserDetails(){
		var q = $q.defer();
		$http.get('https://api.openweathermap.org/data/2.5/weather?q=London&APPID=7def8a09921c79c4e299403b906fd961')
		.then(function(response){
			q.resolve(response);
		}, function(error){
			q.reject('API failed');
		}).then(function(response){
			throw new Error('Error occured!!');
		}).catch(function(e){
			console.log(e);
		});

		return q.promise;
	}
}])