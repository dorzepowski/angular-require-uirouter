(function () {
    define(["require"],function (require) {
        require(["angular","angular-ui-router","./nav","./navController"], function () {
            console.debug("Navbar Module loaded");
        })
    })
})();