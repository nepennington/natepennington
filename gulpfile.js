//this is Nate's first attempt at creating a working
//gulp task runner for sass, livereload, and browsersync


'use strict';

var gulp = require('gulp');
//var sass = require('gulp-sass');
//var cssnano = require('gulp-cssnano');
//var sourcemaps = require('gulp-sourcemaps');
//var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync').create();

// Static server
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});

 php browser setup for Drupal...

gulp.task('browser-sync', function() {
    browserSync.init({
        proxy: "http://http://localhost:32814"
    });
});


//gulp.task('workflow', function () {
//	gulp.src('./web/themes/contrib/bootstrap_subtheme/scss/*.scss')
//		.pipe(sourcemaps.init())
//		.pipe(sass().on('error', sass.logError))
//		.pipe(autoprefixer({
//			browsers: ['last 2 versions'],
//			cascade: false
//		}))
//		.pipe(cssnano())
//		.pipe(sourcemaps.write('./'))
//
//	.pipe(gulp.dest('.web/themes/contrib/bootstrap_subtheme/css/depeche/'))
//});
//
//gulp.task('default', function () {
//	gulp.watch('./web/themes/contrib/bootstrap_subtheme/scss/**/*.scss', ['workflow']);
//});


// These below links wer borrowed from gruntfile.js
//files: {
//	'web/themes/contrib/bootstrap_subtheme/css/style.css': 
//	'web/themes/contrib/bootstrap_subtheme/scss/style.scss'};

