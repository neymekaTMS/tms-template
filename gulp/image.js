const gulp = require('gulp');

module.exports = function image() {
  return gulp.src('./src/img/*.{png, jpg, jpeg, svg, webp}')
    .pipe(gulp.dest('build/img'))
}
