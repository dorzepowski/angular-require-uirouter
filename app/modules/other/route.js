define(["./module"],function (app) {

    app.config(['$stateProvider',function ($stateProvider) {
        $stateProvider.state("main.oth",{
            url: "/oth",
            views : {
                'content@' : {
                    templateUrl: "modules/other/other.html"
                }
            }
        });
    }]);

});