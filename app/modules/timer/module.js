(function () {
    define(["angular", 'angular-ui-router',"main/app"], function(angular, r, app){
        var mod = angular.module("timer",['ui.router']);
        app.requires.push("timer");
        return mod;
    });

})();