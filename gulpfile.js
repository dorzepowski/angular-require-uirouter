var gulp = require('gulp');
var webserver = require('gulp-webserver');
var del = require('del');
var runSequence = require('run-sequence');

gulp.task('serve', function() {
    gulp.src('app')
        .pipe(webserver({
                port:'8000',
                livereload: true,
                open: true
        }));
});


gulp.task('clean', function () {
    return del(["dist"], {dot: true});
});

gulp.task('copy:main', function () {
    gulp.src("app/main/**/*").pipe(gulp.dest("dist"));
});

gulp.task('copy:modules', function () {
    gulp.src("app/modules/**/*", {base: "app"}).pipe(gulp.dest("dist"));
});

gulp.task('build', ['clean', 'copy:main', 'copy:modules'], function (cb) {
});

