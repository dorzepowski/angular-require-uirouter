define(["require", "./module"], function (r, module) {
    module.controller("Mod1Controller", ModController);

    function ModController($scope) {
        $scope.result = "Message from Module 1: IT'S WORKING!!!";
    }
});