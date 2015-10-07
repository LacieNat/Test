var kitApp = angular.module('kitApp', [
		'ngRoute'
	]);

kitApp.controller("HomePageCtrl", ['$scope', '$http',
	function($scope, $http) {
		$scope.title="HELLO";
	}]);

kitApp.config(['$routeProvider',
	function($routeProvider) {
		$routeProvider.
			when('/homepage', {
				templateUrl: '/views/homepage.jade',
				controller: "HomePageCtrl"
			});
	}]);

	/*kitApp.config(['$stateProvider', '$urlRouterProvider', '$ocLazyLoadProvider',
		function($stateProvider, $urlRouterProvider, $ocLazyLoadProvider) {

	    $ocLazyLoadProvider.config({
		  debug:true,
		  events:true,
		  modules:[{
		  	name: 'HomePageCtrl',
		  	files: ['javascripts/controllers/kitHomePage/homePageCtrl.js']
		  }]
		});

		$ocLazyLoad.load('HomePageCtrl');

	    $stateProvider
	  	  .state('kit', {
	  	  	  url:'/kit',
	  		  templateUrl: "../views/kit.jade",
	  		  controller: function($scope) { $scope.title = "KIT"; },//"HomePageCtrl",
	  		  resolve: {
			    loadMyComponents: function($ocLazyLoad) {
			    	return $ocLazyLoad.load({
			    		name: 'kit',
			    		files: [
			    			"/javascripts/controllers/kitHomePage/homePageCtrl.js"
			    		]
			    	})
			    }
			}
	  	});


	    //$urlRouterProvider.otherwise('landing-page');
	}]);

	kitApp.run(['$rootScope', '$window', function ($rootScope, $window) {
		$rootScope.$on("$locationChangeStart", function (event, nextUrl, currentUrl) {
			$window.ga && $window.ga('send', 'pageview', {'page': nextUrl});
		});
	}]);*/
	





