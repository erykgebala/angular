app.controller("ShieldCtrl", function($scope) {
   $scope.shieldNames = [];
    this.addReigns = function() {
        $scope.shieldNames.push("Roman Reigns");
    }
    this.addRollins = function() {
        $scope.shieldNames.push("Seth Rollins");
    }
    this.addAmbrose = function() {
        $scope.shieldNames.push("Dean Ambrose");
    }
})
.directive("reigns", function() {
    return {
        require: "theshield",
        link: function(scope, elem, attrs, ShieldCtrl) {
            ShieldCtrl.addReigns();
        }
    }
})
.directive("rollins", function() {
    return {
        require: "theshield",
        link: function(scope, elem, attrs, ShieldCtrl) {
            ShieldCtrl.addRollins();
        }
    }
})
.directive("ambrose", function() {
    return {
        require: "theshield",
        link: function(scope, elem, attrs, ShieldCtrl) {
            ShieldCtrl.addAmbrose();
        }
    }
})
.directive("theshield", function(){
    return {
        restrict: "E",
        scope: {},
        controller: "ShieldCtrl",
        link: function(scope, elem, attrs) {
            elem.bind("mouseenter", function() {
               console.log(scope.shieldNames);
            });
        }
    }
});







app.directive("firstChanger", function($parse) {
    return {
        restrict: "E",
        transclude: true,
        scope: true,
        template: "<h2>I'm Heisenberg {{testowawartosc}} </h2>" +
        "<input ng-model='dd.test'/>",
        link: function(scope, element, attr) {

            console.log(scope);
            console.log(scope.$id);
            console.log(scope.testowawartosc)
            console.log($parse(attr.config)(scope))
            console.log(attr.config)
            scope.dd = $parse(attr.config)(scope);
        }
    }
 });