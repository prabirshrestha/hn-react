var gulp       = require('gulp'),

    browserify = require('gulp-browserify'),
    concat = require('gulp-concat');

gulp.task('styles', function () {

    gulp.src(['assets/css/typography.css', 'assets/css/styles.css'])
        .pipe(concat('styles.css'))
        .pipe(gulp.dest('./build/'));

});

gulp.task('scripts', function () {

    gulp.src(['assets/js/app.js'])
        .pipe(browserify({
            debug: true,
            transform: [ 'reactify' ]
        }))
        .pipe(gulp.dest('build/'));

});

gulp.task('dev', function () {

    gulp.run('build');

    gulp.watch('assets/js/**/*.js', [ 'scripts' ]);
    gulp.watch('assets/css/**/*.css', [ 'styles' ]);

});

gulp.task('build', [ 'styles', 'scripts' ]);

