define(["./module"],function (app) {
    var providersCache = {};
    app.config(function($controllerProvider, $compileProvider, $filterProvider, $provide){
            providersCache.controller=  $controllerProvider.register;
            providersCache.directive=  $compileProvider.directive;
            providersCache.filter=  $filterProvider.register;
            providersCache.factory=  $provide.factory;
            providersCache.service=  $provide.service;
    });
    return providersCache;
});