(function () {
    define(['jquery','_'],function ($,_) {
        var rand = _.random();
        $('body').append("<h1>VIEW "+rand+"</h1>");


    })
})();