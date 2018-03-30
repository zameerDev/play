app.factory('promService', ['$http', '$q', function($http, $q){
	return {
		getUserDetails: getUserDetails 
	}

	function getUserDetails(){
		var q = $q.defer();
		$http.get('https://jsonplaceholder.typicode.com/posts/1')
		.then(function(response){
			q.resolve(response);
		}, function(error){
			q.reject('API failed');
		});

		return q.promise;
	}
}])