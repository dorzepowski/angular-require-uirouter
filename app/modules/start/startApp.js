(function () {
    define(["angular", 'angular-ui-router',"main/app"], function(angular, r, app){
        var mod = angular.module("start",['ui.router']);
        app.requires.push("start");
        return mod;
    });

})();