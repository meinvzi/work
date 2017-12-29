var gulp = require('gulp');
var webserver = require('gulp-webserver');
var minifycss = require('gulp-minify-css');
var uglify = require("gulp-uglify");
var concat = require("gulp-concat");
//起服务
var webserver = require("gulp-webserver");

gulp.task('webserver',function() {
    gulp.src('.')
        .pipe(webserver({
            host:'localhost',
            port:8090,
            livereload:true,
            open:true,
            fallback:'index.html'
        }))
});

gulp.task("uglify", function () {
    gulp.src("js/*.js")
        .pipe(concat("script.min.js"))
        .pipe(uglify())
        .pipe(gulp.dest("./js"));
});
gulp.task('default',['webserver']);