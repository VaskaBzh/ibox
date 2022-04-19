'use strict';

const {src, dest, watch, series} = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const minifyjs = require('gulp-js-minify');
const htmlmin = require('gulp-html-minify');
const tinypng = require('gulp-tinypng-compress');
const browserify = require('browserify');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');
const log = require('gulplog');
const uglify = require('gulp-uglify');
const reactify = require('reactify');

function javascript() {
  // set up the browserify instance on a task basis
  const b = browserify({
    entries: './entry.js',
    debug: true,
    // defining transforms here will avoid crashing your stream
    transform: [reactify]
  });

  return b.bundle()
    .pipe(source('app.js', { sourcemaps: true }))
    .pipe(buffer())
        // Add transformation tasks to the pipeline here.
        .pipe(uglify())
        .on('error', log.error)
    .pipe(dest('./dist/js/', { sourcemaps: '../sourcemaps/' }));
};

// Static server
function bs() {
    serveSass();
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    watch("./*.html").on('change', browserSync.reload);
    watch("./sass/**/*.sass", serveSass);
    watch("./sass**/*.sass").on('change', browserSync.reload);
    watch("./sass/**/*.scss", serveSass);
    watch("./js/*.js").on('change', browserSync.reload);
};

function serveSass() {
    return src("./sass/**/*.sass", "./sass/**/*.scss")
        .pipe(sass())
        .pipe(autoprefixer({
			cascade: false
		}))
        .pipe(dest("./css"))
        .pipe(browserSync.stream());
};

function buildCSS(done) {
    src('css/**/**.css')
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(dest('dist/css/'));
    done();
}

function buildJS(done) {
    src(['js/**.js', '!js/**.min.js'])
        .pipe(minifyjs())
        .pipe(dest('dist/js/'));
    src('js/**.min.js').pipe(dest('dist/js/'));
    done();
}

function html(done) {
    src('**.html')
        .pipe(htmlmin())
        .pipe(dest('dist/'));
    done();
}

function php(done) {
    src('**.php')
        .pipe(dest('dist/'));
    src('phpmailer/**/**')
        .pipe(dest('dist/phpmailer/'));
    done();
}

function fonts(done) {
    src('**.fonts')
        .pipe(dest('dist/fonts'));
    done();
}

function imagemin(done) {
    src('img/**/**')
        .pipe(tinypng({key: 'b4c9Yhd9qrG37n8hf3xRK6KYR8mjrcdG'}))
        .pipe(dest('dist/img/'))
    src('img/**/*.svg')
        .pipe(dest('dist/img/'))
    done();
};

exports.js = javascript;
exports.serve = bs;
exports.build = series(buildCSS, buildJS, html, php, fonts, imagemin);