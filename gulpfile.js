var gulp = require('gulp');
var webserver = require('gulp-webserver');
var browserify = require('browserify');
var transform = require('vinyl-transform');

gulp.task('webserver', function() {
    gulp.src('examples')
        .pipe(webserver({
            livereload: true,
            open: true
        }));
});

gulp.task('browserify', function () {
    var browserified = transform(function(filename) {
        var b = browserify(filename);
        return b.bundle();
    });

    return gulp.src(['./src/*.js'])
        .pipe(browserified)
        .pipe(gulp.dest('./dist'))
        .pipe(gulp.dest('./examples'));
});

gulp.task('default', ['browserify', 'webserver']);