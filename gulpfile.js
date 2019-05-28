var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var autoprefixer = require('gulp-autoprefixer');
var inject = require('gulp-inject');

gulp.task('scripts', function() {
  return gulp.src('src/js/*.js')
    .pipe(concat('app.js'))
    .pipe(gulp.dest('dist/js'));
});
gulp.task('style', function () {
  return gulp.src('./src/assets/scss/*.scss')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
    .pipe(gulp.dest('./dist/css'));
});
gulp.task('watch', function () {
  gulp.watch('./src/assets/scss/*.scss', gulp.parallel('style'));
  gulp.watch('./src/js/*.js', gulp.parallel('scripts'));
});

gulp.task('build', gulp.parallel('style','scripts'));