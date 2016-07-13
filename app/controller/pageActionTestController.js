app.controller("page1Ctrl", function($scope){


    $scope.actions = [
        {
            key: 0,
            label: "1Pierwszy",
            visible: true
        },
        {
            key: 1,
            label: "2Przycisk testowy",
            visible: true
        },
        {
            key: 2,
            label: "3Testowy trzeci",
            visible: true
        },
        {
            key: 3,
            label: "4Super przycisk",
            visible: true
        },
        {
            key: 4,
            label: "5Wypasiony",
            visible: true
        }
    ];


    $scope.pokazNoweAkcje = function () {
        $scope.actions.push({
            key: 5,
            label: "Testowy",
            visible: true
        })
    }
});
app.controller("page2Ctrl", function($scope){
    $scope.actions = [
        {
            key: 0,
            label: "Pierwszy Strona 2",
            visible: true
        },
        {
            key: 1,
            label: "Przycisk testowy 2",
            visible: true
        },
        {
            key: 2,
            label: "Testowy trzeci 2",
            visible: true
        }
    ]
});