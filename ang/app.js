var ap = angular.module('newApp', []);

ap.factory('MyService', myService);


myService.$inject = [
    '$http',
    '$q'
];
function myService(
    $http,
    $q)
    {
    return {
        doSomething: doSomething
    }

    function doSomething(){
        var defer = $q.defer();

        $http.get('https://api.openweathermap.org/data/2.5/weathers?q=London&APPID=7def8a09921c79c4e299403b906fd961')
        .then(function(resp){
            defer.resolve(resp)
        })
        .catch(function(err){
            defer.reject(err.data.message);
        })
        return defer.promise;
    }
}