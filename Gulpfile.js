var gulp       = require('gulp'),

    browserify = require('gulp-browserify');

gulp.task('scripts', function () {

    gulp.src(['js/app.js'])
        .pipe(browserify({
            debug: true,
            transform: [ 'reactify' ]
        }))
        .pipe(gulp.dest('build/'));

});

gulp.task('dev', function () {

    gulp.watch('js/**/*.js', [ 'scripts' ]);

});

