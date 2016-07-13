app.controller("IndexCtrl", ["$scope", function($scope) {

    $scope.copied = false;
    $scope.cuted = false;

    $scope.pageToWp = 2;

    $scope.samochody = [
        "Skoda",
        "BMW",
        "Audi",
        "Toyota"
    ];

    $scope.auta = [
        {marka: "Audi", model:"A9", kolor: "czarny"},
        {marka: "BMW", model:"E36", kolor: "czarny"},
        {marka: "Skoda", model:"Octavia", kolor: "czarny"},
        {marka: "Audi", model:"A3", kolor: "czerwony"},
        {marka: "Skoda", model:"Fabia", kolor: "czarny"},
        {marka: "BMW", model:"X6", kolor: "czerwony"},
        {marka: "Skoda", model:"Rapid", kolor: "zielony"}
    ];

    $scope.wybranySamochod = null;
}]);

app.filter("samochodUpperCase", function() {
   return function(input){
       return input.toUpperCase()
   }
});