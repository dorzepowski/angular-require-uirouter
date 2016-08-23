(function () {
    define(["./app"],function (app) {
        var mainState = {
            name : "main",
            url: "^",
            parent: "",
            //abstract: true,
            views : {
                'nav' : {
                    templateUrl: "main/navbar.html",
                    controller: "NavController",
                    controllerAs: "nav"
                },
                'content' : {
                    templateUrl: "main/dummy-content.html"
                }
            }
        };


        app.config(['$stateProvider',function ($stateProvider) {
            $stateProvider.state(mainState);
        }]);

        return mainState;
    })
})();