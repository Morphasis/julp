var gulp = require('gulp');
var browserSync = require('browser-sync');

gulp.task('watch', ['browserSync', 'sass'], function (){
  gulp.watch('app/scss/**/*.scss', ['sass']);
  gulp.watch('../src/*.html', browserSync().reload);
  gulp.watch('../src/**/*.html', browserSync().reload);
  // Other watchers
});
