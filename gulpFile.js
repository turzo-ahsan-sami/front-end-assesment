const gulp = require('gulp');
const sass = require('gulp-sass');

gulp.task('sass', function () {
    return gulp.src('src/assets/scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('src/assets/css'))
});

gulp.task('watch', function () {
    gulp.watch('src/assets/scss/*.scss', gulp.series('sass'));
    // Other watchers
})