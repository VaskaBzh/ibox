'use strict';

const {src, dest, watch, series} = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
// const minifyjs = require('gulp-js-minify');
const htmlmin = require('gulp-html-minify');
const tinypng = require('gulp-tinypng-compress');
const browserify = require('browserify');
const source = require('vinyl-source-stream');
const streamify = require('gulp-streamify');
const rename = require('gulp-rename');
const uglify = require('gulp-uglify');

// using vinyl-source-stream:
function javaScript() {
    const bundleStreamEnter = browserify('./src/enter.js').bundle()
    const bundleStreamReg = browserify('./src/reg.js').bundle()
    const bundleStreamTrack = browserify('./src/tracking.js').bundle()
    const bundleStreamTrackZoom = browserify('./src/trackingZoom.js').bundle()
    const bundleStreamTrackWith = browserify('./src/trackingWith.js').bundle()
    const bundleStreamTrackWithOpen = browserify('./src/trackingWithOpen.js').bundle()
    const bundleStreamTrackWithOpenMobile = browserify('./src/trackingWithOpenMobile.js').bundle()
    const bundleStreamTrackDemo = browserify('./src/trackingDemo.js').bundle()
    const bundleStreamTrackDemoOpen = browserify('./src/trackingDemoOpen.js').bundle()
    const bundleStreamTrackDemoOpenMobile = browserify('./src/trackingDemoOpenMobile.js').bundle()
    const bundleStreamTrackDemoZoom = browserify('./src/trackingDemoZoom.js').bundle()

   
    bundleStreamEnter
        .pipe(source('enter.js'))
        .pipe(streamify(uglify()))
        .pipe(rename('bundleEnter.js'))
        .pipe(dest('./dist/'))
        .pipe(browserSync.stream());
    bundleStreamReg
        .pipe(source('reg.js'))
        .pipe(streamify(uglify()))
        .pipe(rename('bundleReg.js'))
        .pipe(dest('./dist/'))
        .pipe(browserSync.stream());
    bundleStreamTrack
        .pipe(source('tracking.js'))
        .pipe(streamify(uglify()))
        .pipe(rename('bundleTrack.js'))
        .pipe(dest('./dist/'))
        .pipe(browserSync.stream());
    bundleStreamTrackZoom
        .pipe(source('trackingZoom.js'))
        .pipe(streamify(uglify()))
        .pipe(rename('bundleTrackZoom.js'))
        .pipe(dest('./dist/'))
        .pipe(browserSync.stream());
    bundleStreamTrackWith
        .pipe(source('trackingWith.js'))
        .pipe(streamify(uglify()))
        .pipe(rename('bundleTrackWith.js'))
        .pipe(dest('./dist/'))
        .pipe(browserSync.stream());
    bundleStreamTrackWithOpen
        .pipe(source('trackingWithOpen.js'))
        .pipe(streamify(uglify()))
        .pipe(rename('bundleTrackWithOpen.js'))
        .pipe(dest('./dist/'))
        .pipe(browserSync.stream());
    bundleStreamTrackWithOpenMobile
        .pipe(source('trackingWithOpenMobile.js'))
        .pipe(streamify(uglify()))
        .pipe(rename('bundleTrackWithOpenMobile.js'))
        .pipe(dest('./dist/'))
        .pipe(browserSync.stream());
    bundleStreamTrackDemo
        .pipe(source('trackingDemo.js'))
        .pipe(streamify(uglify()))
        .pipe(rename('bundleTrackDemo.js'))
        .pipe(dest('./dist/'))
        .pipe(browserSync.stream());
    bundleStreamTrackDemoZoom
        .pipe(source('trackingDemoZoom.js'))
        .pipe(streamify(uglify()))
        .pipe(rename('bundleTrackDemoZoom.js'))
        .pipe(dest('./dist/'))
        .pipe(browserSync.stream());
    bundleStreamTrackDemoOpen
        .pipe(source('trackingDemoOpen.js'))
        .pipe(streamify(uglify()))
        .pipe(rename('bundleTrackDemoOpen.js'))
        .pipe(dest('./dist/'))
        .pipe(browserSync.stream());
    bundleStreamTrackDemoOpenMobile
        .pipe(source('trackingDemoOpenMobile.js'))
        .pipe(streamify(uglify()))
        .pipe(rename('bundleTrackDemoOpenMobile.js'))
        .pipe(dest('./dist/'))
        .pipe(browserSync.stream());
    src(['js/**.js', '!js/**.min.js'])
        .pipe(dest('dist/js/'));
}

// Static server
function bs() {
    javaScript();
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
    watch("./src/modules/*.js").on('change', browserSync.reload);
    watch("./src/modules/*.js", javaScript);
    watch("./src/*.js").on('change', browserSync.reload);
    watch("./src/*.js", javaScript);
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

// function buildJS(done) {
    // src(['js/**.js', '!js/**.min.js'])
    //     .pipe(minifyjs())
    //     .pipe(dest('dist/js/'));
    // src('js/**.min.js').pipe(dest('dist/js/'));
    // done();
// }

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

exports.serve = bs;
exports.build = series(buildCSS, html, php, fonts, imagemin);