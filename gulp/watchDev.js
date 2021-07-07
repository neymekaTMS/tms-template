const gulp = require('gulp');
const styles = require('../gulp/styles');
const image = require('../gulp/image');
const html = require('../gulp/html');

const server = require('browser-sync').create();

function readyReload(cb) {
  server.reload()
  cb()
}

module.exports = function watchDev(cb) {
  server.init({
      server: 'build',
      notify: false,
      open: true,
      cors: true
  })

  gulp.watch('src/img/*.{png, jpg, jpeg, svg, webp}', gulp.series(image, readyReload))
  gulp.watch('src/styles/**/*.scss', gulp.series(styles, cb => gulp.src('build/css').pipe(server.stream()).on('end', cb)))
  gulp.watch('*.html', gulp.series(html, readyReload))

  return cb()
}
