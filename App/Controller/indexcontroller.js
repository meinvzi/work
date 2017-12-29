var app = angular.module('app',[]);

app.controller('indexcontroller',function($scope) {
    $scope.flag = false;
    $scope.flag1 = true;
    $scope.fun = function() {
        $scope.flag =! $scope.flag;
        $scope.flag1 =! $scope.flag;
    }
    $scope.fun1 = function() {
    	$scope.flag =! $scope.flag;
        $scope.flag1 =!$scope.flag1;
    }
})