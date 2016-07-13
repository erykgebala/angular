app.controller("IndexCtrl", function($scope, testFactory, testService, Todo, StateService) {

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

    $scope.wynik = testFactory.testowa()

    testService.addToDo("absbsbs");
    $scope.wynikSerwisu = testService.getToDoList();

    var todo = new Todo("Eryk", "Gebala");

    $scope.testowawartosc = todo.getName();

    console.log($scope.$id)

    $scope.config = {
        test: $scope.testowawartosc
    }


    $scope.go = function(name) {
        StateService.go(name);
    }
});

app.factory("testFactory", function() {

    function testowa() {
        return "testowa metoda wywolama"
    }

    return {
        testowa: testowa
    }
});

app.factory("Todo", function() {
   return function(firstname, lastname) {
       return {
           fistname: firstname,
           lastname: lastname,
           getName : function() {
               return firstname + " " + lastname;
           }
       }
   }
});

app.service("testService", function() {
    this.todoList = [];

    this.addToDo = function(todo) {
        this.todoList.push(todo);
    };
    this.getToDoList = function() {
        return this.todoList;
    };
});

app.controller("RouteCtrl", function($scope, StateService) {
    console.log("route controller is active");
    $scope.witaj = "Hello";
    $scope.dupa = "Hello4";
    $scope.go = function(name) {
        StateService.go(name);
    }
});
app.controller("RouteCtrl2", function($scope, StateService) {
    console.log("route2 controller is active");
    $scope.witaj = "Hello2";
    $scope.go = function(name) {
        StateService.go(name);
    }
});
app.controller("RouteCtrl3", function($scope, StateService) {
    console.log("route3 controller is active");
    $scope.witaj = "Hello3";
    $scope.go = function(name) {
        StateService.go(name);
    }
});
app.controller("RouteCtrl4", function($scope, StateService) {
    console.log("route4 controller is active");
    $scope.dupa = "Hello4";
    $scope.go = function(name) {
        StateService.go(name);
    }
});