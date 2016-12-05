app.controller('movieCtrl', function ($scope,$http) {
	$http.get('apps/data/data.json').then(function(response){
			$scope.movieDetail=response.data.movies;
	})
	
	$scope.value=function(y){
		$scope.orderme=y;
	}
});