routerModule.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
	$stateProvider
		.state('first', {
			url : '/first-page',
			templateUrl: 'views/firstPage.html',
			controller: 'FirstPageController'
		})
		.state('second', {
			// url: '/second-page',
			//url: '/second-page/:a/:b', //passing parameters
			//url: '/second-page/{a}/{b}', //another way of passing parameters
			url: '/second-page/{a: [0-9]+}/{b}', //another way of passing parameters with regular expression support
			templateUrl: 'views/secondPage.html',
			controller: 'SecondPageController'
		})
		.state('third', {
			url: '/third-page',
			template: '<strong>You are at third page..{{firstParam}}-{{secondParam}}</strong>',
			params: {		// default value of params
				a: {value: 1},
				b: {value: '2'}
			},
			controller: 'ThirdPageController'
		})
		.state('home', {
			url: '/',
			template: '<strong>You are at home</strong>'
		});
		// .state('noroute', {
		// 	url: '*path',
		// 	template: '<strong>No route available..</strong>'
		// });

		$urlRouterProvider.otherwise('/');
}])		