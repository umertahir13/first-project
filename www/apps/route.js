app.config(['$routeProvider',function ($routeProvider) {
	$routeProvider
				.when('/home', {
					templateUrl: 'apps/views/home.html',
				})

				.when('/movie', {
					templateUrl: 'apps/views/movie.html',
					controller: 'movieCtrl'
				})

				.when('/software', {
					templateUrl: 'apps/views/software.html',
					controller: 'softwareCtrl'
				})
				.when('/game', {
					templateUrl: 'apps/views/game.html',
					controller: 'gameCtrl'
				})

				.otherwise({ redirectTo: '/home' })
}]);