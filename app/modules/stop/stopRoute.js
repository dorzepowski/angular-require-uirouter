define(["./stopApp"],function (app) {

    app.config(['$stateProvider',function ($stateProvider) {
        $stateProvider.state("main.stop",{
            url: "stop",
            views : {
                'content@' : {
                    templateUrl: "modules/stop/stop.html"
                }
            }
        });
    }]);

});