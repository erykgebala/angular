app.service("StateService", function($state, $filter) {

    var currentStack = [];

    function init() {

    }

    function go(name) {
        console.log($state)
        $state.go(name).then(function() {

            console.log("$state.get()::", $state.get())
            var isOk = true;
            angular.forEach(currentStack, function(s) {
                console.log("s.stateName: ", s.stateName)
                console.log("szukamy: ", $state.$current.parent.name)
                if (s.stateName == $state.$current.parent.name || s.stateName == $state.$current.name){
                    isOk = false;
                    return
                }
            })
            //var stateInStack = $filter('filter')(currentStack, {stateName: $state.$current.parent.name});
            console.log("stateInStack isOk: ", isOk)
            console.log("$state.$current.parent: ", $state.$current.parent)
            if (isOk) {
                currentStack.push({
                    label: $state.$current.data.label,
                    stateName: name
                })
            } else {
                for(var i = currentStack.length-1; i>=0; i--) {

                        if ($state.$current.parent.name == "" && currentStack[i].stateName != $state.$current.name) {
                            currentStack.pop();
                        }
                        if ($state.$current.parent.name != "" &&  currentStack[i].stateName != $state.$current.parent.name) {
                            currentStack.pop();
                        }

                }

            }

        });
    }
    return {
        go: go,
        getCurrentStack: currentStack
    }
});