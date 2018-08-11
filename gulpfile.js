// Gulp
const gulp = require('gulp');

// Prod
const sass = require('gulp-sass');
const minifyCSS = require('gulp-minify-css');
const minify = require('gulp-minify');
const autoPrefixer = require('gulp-autoprefixer');
const concat = require('gulp-concat');
const wait = require('gulp-wait');

// Files
const files = {
  src: {
    scss: './src/scss/**/*.scss',
    js: './src/js/**/*.js'
  },
  dest: {
    css: './assets/css',
    js: './assets/js'
  }
};

// Browser Sync
const browserSync = require('browser-sync').create();

gulp.task('server', () => {
  browserSync.init({
    server: './'
  });

  gulp.watch(files.src.scss, ['styles']);
  gulp.watch(files.src.js, ['scripts']);
  gulp.watch('./*.html', browserSync.reload);
});

// Only Watch
gulp.task('compile', () => {
  gulp.watch(files.src.scss, ['styles']);
  gulp.watch(files.src.js, ['scripts']);
});

// Compiles SCSS
gulp.task('styles', () => {
  return gulp.src('./src/scss/main.scss')
    .pipe(wait(500))
    .pipe(sass().on('error', sass.logError))
    .pipe(autoPrefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(minifyCSS())
    .pipe(gulp.dest(files.dest.css))
    .pipe(browserSync.stream())
});

// Compiles JS
gulp.task('scripts', () => {
  return gulp.src(files.src.js)
    .pipe(concat('scripts.js'))
    .pipe(minify({
      ext: {
        src: '-debug.js',
        min: '.js'
      }
    }))
    .pipe(gulp.dest(files.dest.js))
    .pipe(browserSync.stream())
});

// Default task
gulp.task('default', ['compile']);