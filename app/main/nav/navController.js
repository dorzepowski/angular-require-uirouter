(function () {
    define(['require'],function(require){
        require(['./nav'],function (nav) {
            nav.config(function ($controllerProvider) {
                $controllerProvider.register('NavController',function($state){
                    var ui = this;
                    ui.menu = [];
                    ui.menu.push({title:"Timer",ref:"main.start"});
                    ui.menu.push({title:"Other",ref:"main.oth"});
                    //ui.st = $state;
                });
            })
        });
    });
})();