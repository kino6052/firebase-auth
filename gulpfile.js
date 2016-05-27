var gulp = require('gulp');
var clean = require('gulp-clean');
var inject = require('gulp-inject');
var babel = require('gulp-babel');
var mainBowerFiles = require('main-bower-files');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');

gulp.task('clean', function() { // remove 'dist' folder
    return gulp.src(['./dist', './assets'], {read: false})
		.pipe(clean());
});

gulp.task('dist-index', ['clean'], function(){ // move index.html to the 'dist' folder
  return gulp.src(['./src/index.html'])
                .pipe(gulp.dest('./dist/'));
});


gulp.task('dist-assets', ['dist-index'], function () { // Move assets to the 'dist' folder
  return gulp.src(['./src/**/**/*.js', './src/**/**/*.css'].concat(mainBowerFiles()))
                .pipe(gulp.dest('./dist'));
});


gulp.task('inject', ['dist-assets'], function () {
  var target = gulp.src('./dist/index.html');
  // It's not necessary to read the files (will speed up things), we're only after their paths: 
  var sources = gulp.src(['./src/**/**/jquery.js', './dist/**/*.js', './dist/**/*.css'] , {read: false});
  return target.pipe(inject(sources, {ignorePath: '/dist'}))
    .pipe(gulp.dest('./dist'));
});


gulp.task('default', ['clean', 'dist-index', 'dist-assets', 'inject']);