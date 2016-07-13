 app.directive("colorChanger", function() {
    return {
        templateUrl: "/AngularFun/view/template/abs-template.html",
        restrict: "E",
        replace: false, //zamienia tag dyrektywy na ten z template
        scope: true,
        controller: function($scope) {
          console.log("controller method");
        },
        link: {
            pre: function(scope, element, atrr) {
                console.log("pre function:: " + scope.testowawartosc)
            },
            post: function(scope, element, atrr) {
                console.log("post function ::  " + scope.testowawartosc)
            }
        },
        compile: function(tElem, tAtrrs) {
            console.log("compile it ...");
            console.log(tElem);
            console.log(tAtrrs);
            return {
                pre: function(scope, element, atrr) {
                    console.log("compile pre function:: " + scope.testowawartosc)
                },
                post: function(scope, element, atrr) {
                    console.log("compile post function:: " + scope.testowawartosc)
                }
            }
        }
    }
 });
 app.directive("colorChangerTwo", function() {
     return {
         templateUrl: "/AngularFun/view/template/abs-template.html",
         restrict: "E",
         replace: false, //zamienia tag dyrektywy na ten z template
         scope: true,
         controller: function($scope) {
             console.log("two - controller method");
         },
         link: {
             pre: function(scope, element, atrr) {
                 console.log("two - pre function:: " + scope.testowawartosc)
             },
             post: function(scope, element, atrr) {
                 console.log("two - post function ::  " + scope.testowawartosc)
             }
         },
         compile: function(tElem, tAtrrs) {
             console.log("two - compile it ...");
             console.log(tElem);
             console.log(tAtrrs);
             return {
                 pre: function(scope, element, atrr) {
                     console.log("two - compile pre function:: " + scope.testowawartosc)
                 },
                 post: function(scope, element, atrr) {
                     console.log("two - compile post function:: " + scope.testowawartosc)
                 }
             }
         }
     }
 });
