/* use strict*/
var myRev = angular.module("RavensApp", []);

myRev.service("ravenService", function($http, $q) {
    var deffered = $q.defer();


    $http.get("/AngularFun/data/data.json").then(function(data){
       deffered.resolve(data);
    });

    this.getDatas = function() {
        return deffered.promise;
    }
});

myRev.controller("ravensCtrl", function($scope, ravenService){
        ravenService.getDatas().then(function(data){
           console.log(data);
        });
});