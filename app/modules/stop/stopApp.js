(function () {
    define(["angular", 'angular-ui-router',"main/app"], function(angular, r, app){
        var mod = angular.module("stop",['ui.router']);
        app.requires.push("stop");
        return mod;
    });

})();