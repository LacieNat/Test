var kitApp = angular.module('kitApp', []);

kitApp.controller("HomePageCtrl", ['$scope', '$http',
	function($scope, $http) {
		$scope.title="HELLO";
	}]);