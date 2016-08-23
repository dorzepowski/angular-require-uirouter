(function () {
    define(["require"],function (require) {
        require(["./nav","./navController"], function () {
            console.log("Navbar Module loaded");
        })
    })
})();