var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: '../src'
    },
  })
})

gulp.task('watch', function (){
  gulp.watch('../src/scss/**/*.scss', ['sass']);
  gulp.watch('../src/*.html', browserSync.reload);
  gulp.watch('../src/**/*.html', browserSync.reload);
  gulp.watch('../src/javascript/**/*.js', browserSync.reload);
  // Other watchers
});

// gulp.task('sass', function(){
//   return gulp.src('../src/scss/**/*.scss')
//     .pipe(sass().on('error', sass.logError))
//     .pipe(gulp.dest('../src/css'))
// });

gulp.task('sass', function() {
    return gulp.src("../src/scss/**/*.scss")
        .pipe(sass())
        .pipe(gulp.dest("../src/css"))
        .pipe(browserSync.stream());
});
