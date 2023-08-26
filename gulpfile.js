const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const htmlmin = require('gulp-htmlmin');
const uglify = require('gulp-uglify-es').default;
const obfuscate = require('gulp-javascript-obfuscator');

function compress_sass() {
    return gulp.src('./src/styles/main.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({ outputStyle: "compressed" }))
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest("./dist/styles"));
}

function compress_html() {
    const caminho = gulp.src(['./styles/*.css'], { read: false });
    return gulp.src('./src/index.html')
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest('./dist'));
}

function export_Lib() {
    return gulp.src('./src/lib/confetti.js/*')
        .pipe(gulp.dest('./dist/lib/confetti.js'));
}

function compress_JS() {
    return gulp.src('./src/scripts/*.js')
        .pipe(uglify())
        .pipe(obfuscate())
        .pipe(gulp.dest('./dist/scripts'));
}


exports.default = gulp.parallel(compress_sass, compress_html, export_Lib, compress_JS);
exports.watch = function () {
    gulp.watch('./src/styles/*.scss', gulp.parallel(compress_sass, compress_html));
}
