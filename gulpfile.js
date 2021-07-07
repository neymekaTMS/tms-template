const gulp = require('gulp');
const styles = require('./gulp/styles');
const fonts = require('./gulp/fonts');
const image = require('./gulp/image');
const html = require('./gulp/html');
const watchDev = require('./gulp/watchDev');

const build = gulp.parallel(html, styles, fonts, image);

module.exports.start = gulp.series(build, watchDev);
module.exports.build = gulp.series(build);
