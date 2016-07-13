app.directive("pageAction", function($timeout, $window){
    return {
        restrict: "E",
        scope: {
            elements: "=",
            maxSize: "@"
        },
        templateUrl: "/AngularFun/view/pageActionTest/pageAction.html",
        link : function(scope, elem, attrs) {

            scope.isActive = false;
            scope.width = $window.innerWidth;
            scope.actionsSelect = [];

            var tempSizeArray = [-1, 92,140, 125, 130, 107, 103];

            var btnsSize = 0;
            var rightMainContent = 0;
            scope.selectElements = angular.copy(scope.elements);

       /*     angular.forEach(scope.elements , function(e) {
                e.visible = false;
            });
*/

            scope.$watch('elements', function(newValue, oldValue) {
                console.log(newValue)
                if (oldValue == newValue || oldValue == null) {
                    return;
                }
                $timeout(function() {
                  /*  console.log("scope.elements: ",scope.elements)
                    scope.selectElements = angular.copy(scope.elements);
                    angular.forEach(scope.selectElements , function(e) {
                        e.visible = false;
                    });

                    init();*/
                });
            }, true);

            angular.forEach(scope.selectElements , function(e) {
                e.visible = false;
            });

            function checkSize() {
                btnsSize = 0;
                rightMainContent = 0;
                var btns = $(".actionBtn");
                angular.forEach(btns, function(btn) {
                    if ($(btn).hasClass("visible")) {
                        console.log("btn id::: ", $(btn).attr("id"))
                        console.log("$(btn)[0].offsetWidth::: ", $(btn)[0].offsetWidth)
                        var buttonSize = $(btn)[0].offsetWidth;
                        buttonSize += 10; //UWZGLEDNIAMY MARGINESY
                        btnsSize += buttonSize;
                    }
                });

                rightMainContent = $("#rightMainContent").innerWidth();
                btnsSize += 85;
            }

            function init() {
                checkSize();
                rebuildActions();
            }

            $timeout(function() {
                console.log("init.....")
              /*  angular.forEach(scope.elements , function(e) {
                    e.visible = true;
                });*/
                init();
            });

            function moveActionToSelect() {
                console.log("moved to select");
                var element = $( ".actionBtn.visible" ).last();
                var id = $(element).attr("id").split("-")[1];

                $(element).removeClass("visible")
                $(element).addClass("invisible");
                scope.elements[id].visible = false;
                scope.selectElements[id].visible = true;
                rebuildActionSelect();
            }

            function moveActionToButton() {
                console.log("moved to buttons");
                var element = $( ".actionBtn.invisible" ).first();

                if (element.length > 0) {
                    var tmp = tempSizeArray[$(element).attr("id").split("-")[1]];
                    if (tmp + btnsSize < rightMainContent) {
                        var id = $(element).attr("id").split("-")[1];
                        $(element).removeClass("invisible")
                        $(element).addClass("visible")
                        scope.elements[id].visible = true;
                        scope.selectElements[id].visible = false;
                        rebuildActionSelect();
                    }
                }
            }

            function rebuildActionSelect() {
                var setToActive = false
                angular.forEach(scope.selectElements, function(btn, index) {
                    if (scope.selectElements[index].visible) {
                        setToActive = true;
                        return;
                    }
                });
                scope.isActive = setToActive;
            }

            function rebuildActions() {
                var sumSize = btnsSize;//+ emptyMarginSize;
                console.log("sumSize: ", sumSize);
                console.log("rightMainContent:: ", rightMainContent);
                if (sumSize >= Math.ceil(rightMainContent)) {
                    moveActionToSelect();
                    init();
                } else {
                    moveActionToButton();
                }
            }

            function onResize(){
                if (scope.width !== $window.innerWidth) {
                    init();
                    scope.width = $window.innerWidth;
                    scope.$digest();
                }
            }

            function cleanUp() {
                angular.element($window).off('resize', onResize);
            }

            angular.element($window).on('resize', onResize);
            scope.$on('$destroy', cleanUp);
        }
    }
});