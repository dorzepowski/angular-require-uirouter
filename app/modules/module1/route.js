define(["require", "./module"], function (require, module) {
    module.config(['$stateProvider', function ($stateProvider) {
        $stateProvider.state("main.mod1", {
            url: "/mod1",
            views: {
                'content@': {
                    controller: "Mod1Controller",
                    templateUrl: "modules/module1/mod.html"
                }
            },
            resolve: {
                depsLoaded: function ($q) {
                    return $q(function (resolve) {
                        require(["./mod1-controller"], function () {
                            resolve(true);
                        });
                    });
                }
            }
        });
    }]);
});