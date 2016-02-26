'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'ngAnimate',
  'myApp.view1',
  'myApp.view2',
  'myApp.version'
]).
config(['$routeProvider', function($routeProvider) {
 
  // $routeProvider
  // 	.when('/'), {
  // 		templateUrl: 'view1.html',
  // 		controller: 'mainController'
  // 	}
  // 	.otherwise({redirectTo: '/view1'});
}]);
