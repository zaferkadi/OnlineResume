'use strict';

var gulp = require('gulp'),
	sass = require('gulp-sass'),
	cleanCSS = require('gulp-clean-css'),
	nodemon = require('gulp-nodemon'),
	sourcemaps = require('gulp-sourcemaps'),
	livereload = require('gulp-livereload'),
	$ = require('gulp-load-plugins')();

var assets = {
	pathSCSS: ['./assets/scss/**/*.scss'],
	pathJS: ['./assets/js/**/*.js'],
	pathHTML: ['./app/**/*.html'],
};
var config = {

	dest: './app/dest/css/',
	
	build: ['build/']
	//src: ['src/']
};

gulp.task('glyph', function () {
  return gulp.src('./assets//fonts/config.json')
    .pipe($.fontello())
    //.pipe($.print())
    .pipe(gulp.dest('./app/dest/css/'))
});

gulp.task('scss', function() {
	
	return gulp.src(assets.pathSCSS)
		.pipe(sourcemaps.init())
		.pipe(sass()
			.on('error', sass.logError))
		//.pipe(autoprefixer('last 3 versions'))
		//.pipe(minifycss())
		//.pipe(rename({suffix: '.min'}))
		
		.pipe(cleanCSS())
		.pipe(sourcemaps.write())
		.pipe(gulp.dest(config.dest));
	//.pipe(reload({stream:true}));

});

gulp.task('html', function() {
	return gulp.src(assets.pathHTML)
		.pipe(livereload());
});

gulp.task('watch', function() {
	gulp.watch(assets.pathSCSS, ['scss']);
});

gulp.task('serve', function() {
	// listen for changes
	livereload.listen();
	// configure nodemon
	nodemon({
		// the script to run the app
		script: './index.js',
		ext: 'html js',
		ignore: 'gulpfile.js'
	}).on('restart', function() {
		// when the app has restarted, run livereload.
		gulp.src('./index.js')
			.pipe(livereload());
			//.pipe(notify('Reloading page, please wait...'));
	})
})
gulp.task('default', ['serve','scss', 'watch']);
//gulp.task('default', ['develop','scss', 'watch']);