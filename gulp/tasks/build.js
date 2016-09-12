var gulp = require('gulp');
var runSequence = require('run-sequence');

gulp.task('build', function (callback) {
  runSequence('clean:dist',
    ['sass', 'useref', 'images', 'fonts'],
    callback
  )
})
