var gulp = require('gulp');
var webserver = require('gulp-webserver');

gulp.task('serve', function() {
    gulp.src('app')
        .pipe(webserver({
            host: '0.0.0.0',
            port:'8000',
            livereload: true
        })).pipe(webserver({
                port:'8000',
                livereload: true,
                open: true
        }));
});