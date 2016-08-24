(function () {

    define(["require", "../providers"], function (require, providers) {
        providers.controller("StartController", StartController);

        function StartController($scope, $state, TimeService) {
            $scope.start = start;

            function start() {
                TimeService.start();
                $state.go("main.timer.view");
            }
        }
    });

})();