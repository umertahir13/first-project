app.controller('softwareCtrl', function ($scope,$http) {
	$http.get('apps/data/data.json').then(function(response){
		$scope.softwareDetail=response.data.softwares;
	})
	
	$scope.value=function(y){
		$scope.orderme=y;
	}
});