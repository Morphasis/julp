var gulp = require('gulp');
var cssnano = require('gulp-cssnano');

gulp.task('useref', function(){
  return gulp.src('../src/*.html')
    .pipe(useref())
    .pipe(gulpIf('*.js', uglify()))
    // Minifies only if it's a CSS file
    .pipe(gulpIf('*.css', cssnano()))
    .pipe(gulp.dest('../dist'))
});
