let gulp = require('gulp');
let sass = require('gulp-sass')(require('sass'));
let uglify = require('gulp-uglify');
let concat = require('gulp-concat');
gulp.task('sass', function () {
    return gulp.src('./src/scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./dist/css'));
});
gulp.task('concat-css', function () {
    return gulp.src('./src/scss/*.scss')
        .pipe(concat('style.scss'))
        .pipe(gulp.dest('./dist/scss'));
})
gulp.task('scripts', function () {
    return gulp.src('./src/js/main.js')
        .pipe(uglify({
            toplevel: true
        }))
        .pipe(gulp.dest('./dist/js'));
});
// gulp.task('compress', function() {
//     gulp.src('./src/img/*')
//         .pipe(
//             imagemin([
//                 imagemin.gifsicle({ interlaced: true }),
//                 imagemin.jpegtran({ progressive: true }),
//                 imagemin.optipng({ optimizationLevel: 5 }),
//                 imagemin.svgo({
//                     plugins: [{ removeViewBox: false }],
//                 }),
//             ]),
//         )
//         .pipe(gulp.dest('./dist/img'))
// });
module.exports.some = gulp.series('sass', 'concat-css', 'scripts');