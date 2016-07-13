var isolated = angular.module("isolatedApp", []);

isolated.controller("IndexCtrl", ["$scope", function($scope) {

    $scope.getMove = function(name, movetype, move) {
        console.log(name + ' : ' + movetype + ' : ' + move);
    }

    $scope.movetypes = ['finisher', 'offensive move', 'defensice move'];
    $scope.movetype = $scope.movetypes[0];

}])

.directive("character", function() {
    return {
        restrict: "E",
        scope: {
            name: "@",
            image: "@",
            movetype: "=",
            useMove: "&"
        },
        templateUrl: "/AngularFun/view/template/shield.html",
        controller: "IndexCtrl"
    }
})

