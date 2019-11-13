var gulp = require('gulp');
var cssnano = require('gulp-cssnano');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

gulp.task('sass', function(){
    return gulp.src('app/style.scss')
        .pipe(sass()) // compile SCSS to CSS
        .pipe(cssnano()) // minify CSS
        .pipe(gulp.dest('dist')); // put final CSS in dist folder
});


gulp.task('watch', function(){
    gulp.watch('app/*.scss', gulp.series('sass'));
});

gulp.task('default', gulp.series('sass', 'watch'));