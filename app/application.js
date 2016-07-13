var app = angular.module("myApp", ["ui.router"]);


app.config(function($stateProvider){
    $stateProvider
        .state("abc", {
            url: "/abc",
            templateUrl: "/AngularFun/view/template/abs-template.html",
            controller: "RouteCtrl",
            data: {
                label : "Glowna"
            }
        })
        .state("abc.dupa", {
            url: "/abcdupa",
            templateUrl: "/AngularFun/view/template/dupa.html",
            controller: "RouteCtrl4"
        })
        .state("abc2", {
            url:"/abc2",
            templateUrl: "/AngularFun/view/template/abs-template.html",
            controller: "RouteCtrl2",
            data: {
                label : "Druga"
            }
        })
        .state("abc3", {
            url:"/abc3",
            templateUrl: "/AngularFun/view/template/dupa2.html",
            controller: "RouteCtrl3",
            data: {
                label : "Trzecia"
            }
        })
        .state("pageAction1", {
            url:"/pageAction1",
            templateUrl: "/AngularFun/view/pageActionTest/p1.html",
            controller: "page1Ctrl"
        })
        .state("pageAction2", {
            url:"/pageAction2",
            templateUrl: "/AngularFun/view/pageActionTest/p2.html",
            controller: "page2Ctrl"
        })

});