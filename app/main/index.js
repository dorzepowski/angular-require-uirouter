(function () {
    define(["require"],function (require) {
        require(["nav/index","./app", "./mainState"], function(){
            console.log("Main module started")
        });
    })
})();