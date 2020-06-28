const gulp     = require('gulp');
const sass     = require('gulp-sass');
const plumber  = require('gulp-plumber');
const prefixer = require('gulp-autoprefixer');
const coffee   = require('gulp-coffee');

gulp.task('sass', function(done) {
  gulp.src('css/*.sass')
    .pipe(plumber())
    .pipe(sass())
    .pipe(prefixer('last 2 version'))
    .pipe(gulp.dest('css'));
  done();
});

gulp.task('coffee', function(done) {
  gulp.src('js/*.coffee')
    .pipe(plumber())
    .pipe(coffee())
    .pipe(gulp.dest('js'));
  done();
});

gulp.task('default', gulp.series(gulp.parallel('sass', 'coffee'), function(done) {
  done();
}));
