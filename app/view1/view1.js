'use strict';

angular.module('myApp.view1', ['ngRoute'])


.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope',function($scope) {
	$scope.pageClass = 'page-home';
	$scope.creditInfo = [
		{type: 'Credit Card',
			amount: '2,839.00'},
		{type: 'Cash',
			'amount': '2,839.00'},
		{type: 'Bills',
			'amount': '2,839.00'},
		{type: 'Investments',
			'amount': '2,839.00'}
	];

}]);