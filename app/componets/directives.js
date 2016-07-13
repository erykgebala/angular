app.directive("gridScreen", function($http) {
    return {
        restrict: "E",
        controller : function ($scope) {
            console.log("grid screen controller");
            this.setEditor = function (editor) {

            };
            this.setColumns = function(columns) {
                $scope.cols = columns;
            }
        },
        link: function (scope, elem, attr) {
            console.log("grid screen");
            $http.get(attr.resource).success(function(response) {
                scope.rows = response.data;
            });
            console.log(scope.cols);
        }
    };
});
app.directive("gridColumns", function() {
    return {
        restrict: "E",
        require: ["^gridScreen", "gridColumns"],
        controller : function () {
            console.log("grid columns controller");
            var columns = [];
            this.addColumn = function (col) {
                columns.push(col);
            };
            this.getColumns = function () {
                return columns;
            }
        },
        link : function (scope, element, attr, controllers) {
            var gridScreenController = controllers[0];
            var gridColumnsController = controllers[1];
            gridScreenController.setColumns(gridColumnsController.getColumns());
            console.log("grid columns");
        }
    };
});
app.directive("gridColumn", function() {
    return {
        restrict: "E",
        require: "^gridColumns",
        link : function (scope, element, attr, gridColumnsController) {
            gridColumnsController.addColumn({
                title : attr.title,
                field: attr.field
            });
            console.log("grid column " + attr.title);
        }
    };
});
app.directive("grid", function() {
    return {
        restrict: "E",
        controller : function () {
            console.log("grid controller");
        }
    };
});
app.directive("withInlineEditor", function() {
   return {
       restrict: "A",
       link : function () {
           console.log("withInlineEditor");
       }
   };
});