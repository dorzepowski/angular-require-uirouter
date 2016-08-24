(function () {
    define(["./app"],function (app) {
        var mainState = {
            name : "main",
            url: "^",
            parent: "",
            //abstract: true,
            views : {
                'nav' : {
                    templateUrl: "main/nav/navbar.html",
                    controller: "NavController",
                    controllerAs: "nav"
                },
                'content' : {
                    templateUrl: "main/default-content.html"
                }
            }
        };


        app.config(['$stateProvider',function ($stateProvider) {
            $stateProvider.state(mainState);
        }]);

        return mainState;
    })
})();