(function () { //IIFE
	'use strict'; //Don't allow accidental global variables

	angular.module('LunchCheck', [])
		.controller('LunchCheckController', LunchCheckController);

		LunchCheckController.$inject = ['$scope'];
		function LunchCheckController($scope) {
			$scope.LunchMenuInput = ""; //Initialize lunch menu input variable

			$scope.CheckIfTooMuch = function () {
				var LunchMenuItems = $scope.LunchMenuInput.split(',');
				var NumberOfItems = LunchMenuItems.length
				if ($scope.LunchMenuInput == "") {
					$scope.message = "Please enter data first"
				} else if (NumberOfItems <= 3) {
					$scope.message = "Enjoy!"
				} else {
					$scope.message = "Too much!"
				}
			}
		};
})();