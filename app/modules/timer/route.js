define(["require", "./module"], function (require, app) {

    app.config(['$stateProvider', function ($stateProvider) {
        $stateProvider.state("main.timer", {
            url: "timer/",
            abstract: true,
            resolve: {
                timerDeps: function ($q) {
                    var d = $q.defer();
                    require(["./services/TimeService"], function () {
                        d.resolve(true);
                    });
                    return d.promise;
                }
            }
        })
            .state("main.timer.start", {
                url: "start/",
                views: {
                    'content@': {
                        templateUrl: "modules/timer/start/start.html",
                        controller: "StartController",
                        resolve: {
                            depsLoaded: function ($q) {
                                var d = $q.defer();
                                require(["./start/StartController"], function () {
                                    d.resolve(true);
                                });
                                return d.promise;
                            }
                        }
                    }
                }
            })
            .state("main.timer.view", {
                url: "view/",
                views: {
                    'content@': {
                        templateUrl: "modules/timer/view/view.html",
                        controller: "ViewController",
                        resolve: {
                            depsLoaded: function ($q) {
                                var d = $q.defer();
                                require(["./view/ViewController"], function () {
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