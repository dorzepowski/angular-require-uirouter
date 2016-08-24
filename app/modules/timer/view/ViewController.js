(function () {

    define(["require", "../providers"], function (require, providers) {
        providers.controller("ViewController", ViewController);

        function ViewController($scope, TimeService) {
            $scope.time = TimeService.time;
        }
    });

})();