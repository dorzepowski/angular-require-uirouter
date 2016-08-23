(function () {
    define(['require'],function(require){
        require(['./nav'],function (nav) {
            nav.config(function ($controllerProvider) {
                $controllerProvider.register('NavController',function($state){
                    var ui = this;
                    ui.menu = [];
                    ui.menu.push({title:"Start",ref:"main.start"});
                    ui.menu.push({title:"Stop",ref:"main.stop"});
                    //ui.st = $state;
                });
            })
        });
    });
})();