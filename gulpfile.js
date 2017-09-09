var gulp            = require('gulp'),
    shell           = require('gulp-shell'),
    browserSync     = require('browser-sync').create(),
    prefix          = require('gulp-autoprefixer')
    htmlmin         = require('gulp-htmlmin');

gulp.task('default', ['build', 'watch']);


/**
 * JEKYLL development
 * Watch w/ Browsersync
 */
gulp.task('build', shell.task(['bundle exec jekyll serve --watch']));


/**
 * Clona el servidor de Jekyll, accesible desde:
  * local: localhost:3000/front-end/
  * network: 192.168.1.xx:3000/front-end/
 */
gulp.task('watch', ['browser-sync'], function () {
  // Recarga cada vez que exista una cambio en los ficheros
  gulp.watch('_site/**/*.*').on('change', browserSync.reload);
});
// Browsersync!
gulp.task('browser-sync', function () {
    browserSync.init({
        proxy: "localhost:4000/front-end/",
        open: false,
        logFileChanges: false
    });
});









/**
  *   P R O D U C C I Ó N
  */
gulp.task(':prod', ['autoprefixer','htmlmin']);

// -----------------------------------------------------------------------------
//    Autoprefixer - (https://github.com/postcss/autoprefixer#options)
// -----------------------------------------------------------------------------
gulp.task('autoprefixer', function () {
    return gulp
        .src('_site/assets/main.css')
        .pipe(prefix([
          'last 16 versions',
           '> 1%'
          ]))
        .pipe(gulp.dest('_site/assets'))
});

// -----------------------------------------------------------------------------
//    Minificar HTML - (https://github.com/jonschlinkert/gulp-htmlmin)
// -----------------------------------------------------------------------------
gulp.task('htmlmin', function () {
    return gulp.src('_site/**/*.html')
      .pipe(htmlmin({
        collapseWhitespace: true,
        removeComments: true,
        minifyCSS: true,
        minifyJS: true
      }))
      .pipe(gulp.dest('_site'));
});
