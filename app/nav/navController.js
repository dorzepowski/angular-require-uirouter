(function () {
    define(['require'],function(require){
        require(['./nav'],function (nav) {
            nav.controller('NavController',function($scope){
                $scope.menu = [];
                $scope.menu.push({title:"Start"});
                $scope.menu.push({title:"Stop"});
            });
        });
    });
})();