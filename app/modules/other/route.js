define(["./module", "require"], function (app, require) {

    var count = 0;

    app.config(['$stateProvider',function ($stateProvider) {
        $stateProvider.state("main.oth",{
            url: "/oth",
            views : {
                'content@' : {
                    templateUrl: "modules/other/other.html"
                }
            }
        }).state("main.oth.changeable", {
            url: "/test",
            views: {
                'content@': {
                    templateProvider: function () {
                        var color = "orange";
                        var text = "ON";
                        if (count % 4 == 0) {
                            var color = "red";
                            var text = "SHOW";
                        } else if (count % 4 == 1) {
                            var color = "green";
                            var text = "MUST";
                        } else if (count % 4 == 2) {
                            var color = "YELLOW";
                            var text = "GO";
                        }
                        count++;
                        return '<H1 style="color: ' + color + ';">' + text + '</H1><a ui-sref="main.oth.changeable" ui-sref-opts="{reload:true}">GO</a>'
                    }
                }
            }
        })

        ;
    }]);

});