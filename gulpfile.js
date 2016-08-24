var gulp = require('gulp');
var webserver = require('gulp-webserver');

gulp.task('serve', function() {
    gulp.src('app')
        .pipe(webserver({
            port:'8000',
            livereload: true,
            open: true
        }));
});