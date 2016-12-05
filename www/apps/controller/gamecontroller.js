app.controller('gameCtrl', function ($scope,$http) {
	$http.get('apps/data/data.json').then(function(response){
		$scope.gameDetail=response.data.games;
	})

	$scope.value=function(y){
		$scope.orderme=y;
	}
	
});