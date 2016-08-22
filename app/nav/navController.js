(function () {
    define(['require'],function(require){
        require(['./nav'],function (nav) {
            nav.controller('NavController',function($state){
                var ui = this;
                ui.menu = [];
                ui.menu.push({title:"Start"});
                ui.menu.push({title:"Stop"});
                $scope.stateDeb = $state;
            });
        });
    });
})();