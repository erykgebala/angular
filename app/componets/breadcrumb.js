app.directive("breadcrumb", function(StateService, $compile){
   return {
       restrict: "E",
       scope: {},
       link : function(scope, elem, attrs) {
           var template = "<div><ul>" +
               "<li ng-repeat='c in currentStack track by $index'>" +
               "{{c.label}}" +
               "</li>" +
               "</ul></div>"
           scope.currentStack = StateService.getCurrentStack;

           elem.html(template);
           $compile(elem.contents())(scope);
       }
   }
});