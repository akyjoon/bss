const gulp = require('gulp');
const nodemon = require('gulp-nodemon');
const browserSync = require('browser-sync').create();
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const mixins = require('postcss-mixins');
const cssvars = require('postcss-simple-vars');
const nested = require('postcss-nested');
const cssImport = require('postcss-import');
const webpack = require('gulp-webpack');
const babel = require('gulp-babel')
var named = require('vinyl-named');

//Nodemon
gulp.task('nodemon', function (cb) {
	
	var started = false;
	
	return nodemon({
		script: 'app.js'
	}).on('start', function () {
		if (!started) {
			cb();
			started = true; 
		} 
	});
});

/////////////////////////////////

gulp.task('serve', ['postcss', 'compilejs', 'nodemon'], function() {
	browserSync.init(null, {
		proxy: "http://localhost:5000",
        files: [{
					match: ["views/**/*.handlebars", "/**/*.js", "public/js/modules/*.js", "public/styles/postcss/*.css"],
					fn: function(event, file) {
						this.reload()
					}}],
        browser: "firefox",
				port: 7000}
			);

	gulp.watch("public/styles/postcss/**/*.css", ['postcss']);
	gulp.watch("public/js/*.js", ['compilejs']);
	gulp.watch("public/js/modules/*.js", ['compilejs']);
	gulp.watch("views/**/*.handlebars").on('change', browserSync.reload);
});

// Compile postcss into CSS & auto-inject into browsers
gulp.task('postcss', function() {
	return gulp.src(['public/styles/postcss/*.css', '!_*'])
			.pipe(postcss([cssImport, mixins, nested, cssvars, autoprefixer]))
			.on('error', function(errorInfo) {
				console.log(errorInfo.toString());
				this.emit('end');
			})
			.pipe(gulp.dest("public/styles/css"))
			.pipe(browserSync.stream());
});

// Webpack & Babel
gulp.task('compilejs', function() {
	return gulp.src(['public/js/home.js', 'public/js/priceList.js', 'public/js/clients.js'])
		.pipe(named())
		.pipe(webpack({
			module: {
				loaders: [
					{
						loader: 'babel-loader',
						query: {
							presets: ['es2015']
						},
						test: /\.js$/,
						exclude: /node_modules/
					}
				]
			}
		}))
		.pipe(gulp.dest('public/js/dist'))
		// .pipe(browserSync.stream());
})

gulp.task('default', ['serve']);