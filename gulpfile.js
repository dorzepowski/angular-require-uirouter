var gulp = require('gulp');
var webserver = require('gulp-webserver');

gulp.task('serve', function() {
    gulp.src('app')
        .pipe(webserver({
            host: '192.168.1.114',
            port:'8000',
            livereload: true
        })).pipe(webserver({
                port:'8000',
                livereload: true,
                open: true
        }));
});