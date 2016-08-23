(function () {

    define(["require", "./providers", "_"], function (require, providers, _) {
        providers.controller("StartController", StartController);

        function StartController($scope, TimeService) {
            $scope.time = TimeService.time;
            $scope.start = start;

            function start() {
                $scope.started;
                TimeService.start();
                //$state.go("main.time");
            }
        }
    });

})();