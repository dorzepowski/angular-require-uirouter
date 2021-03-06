(function () {
    console.log("boot");

    require.config({
        basePath: "/",
        paths:{
            'domReady': 'libs/domReady/domReady',
            "jquery":"libs/jquery/dist/jquery.min",
            "_":"libs/lodash/dist/lodash.min",
            'angular': 'libs/angular/angular.min',
            'angular-ui': 'libs/angular-ui/build/angular-ui.min',
            'angular-ui-router': 'libs/angular-ui-router/release/angular-ui-router.min'
        },
        shim: {
            'angular': {
                exports: 'angular'
            },
            'angular-ui': ['angular'],
            'angular-ui-router': ['angular']
        }

    });


    define(["require","angular","main/index","modules/timer/index", "modules/other/index"],function(require, angular){

        require(['domReady!', 'main/app'], function (document) {
            console.log("Starting bootstraping");
            angular.bootstrap(document, ['mainApp']);
        });
    });
})();