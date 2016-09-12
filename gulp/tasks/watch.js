var gulp = require('gulp');
var browserSync = require('browser-sync');

gulp.task('watch', ['browserSync', 'sass'], function (){
  gulp.watch('../src/scss/**/*.scss', ['sass']);
  gulp.watch('../src/*.html', browserSync().reload);
  gulp.watch('../src/**/*.html', browserSync().reload);
  gulp.watch('../src/js/**/*.js', browserSync().reload);
  // Other watchers
});
