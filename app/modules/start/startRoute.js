define(["require", "./startApp"], function (require, app) {

    app.config(['$stateProvider', function ($stateProvider) {
        $stateProvider.state("main.start", {
            url: "start",
            views: {
                'content@': {
                    templateUrl: "modules/start/start.html",
                    controller: "StartController",
                    resolve: {
                        depsLoaded: function ($q) {
                            var d = $q.defer();
                            require(["./TimeService","./StartController"], function () {
                                d.resolve(true);
                            });
                            return d.promise;
                        }
                    }
                }
            }
        });
    }]);

});