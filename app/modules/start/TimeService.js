(function () {

    define(["require","angular", "./providers", "_"], function (require,angular, providers, _) {

        providers.service("TimeService", function ($interval) {
            var serv = this;

            serv.start = start;
            serv.stop = stop;
            serv.time = time;

            var t = 0;
            var delta = 96;
            var interval;

            function start(){
                if(_.isNil(interval)){
                    interval = $interval(function () {
                        t += delta;
                    },delta);
                }
            }

            function stop() {
                if(!_.isNil(interval)){
                     $interval.cancel(interval);
                }

            }

            function time() {
                return t;
            }

        });
    });

})();