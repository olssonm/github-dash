var gulp = require('gulp');
var zip = require('gulp-zip');
var elixir = require('laravel-elixir');
var argv = require('yargs').argv;

var Task = elixir.Task;

/**
 * Zip-method for packaging build
 * @return {[type]} [description]
 */
elixir.extend('zip', function() {
    new Task('zip', function() {
		return gulp.src(['./build/**/**.*'])
			.pipe(zip('github-dash.zip'))
			.pipe(gulp.dest('./ship'))
    });
});

/**
 * Main gulp actions via elixir
 */
elixir(function(mix){

	var zip = argv.zip || false;

	mix.styles([
		'./src/css/github-dash.css'
	], './build/src/css/github-dash.min.css')
	.scripts([
		'./src/js/jquery.min.js',
		'./src/js/github-dash.js'
	], './build/src/js/github-dash.min.js')
	.copy('./src/html', './build/src/html')
	.copy('./src/icons', './build/src/icons')
	.copy('./manifest-ship.json', './build/manifest.json')
	.copy('./**.md', './build/');

	if (zip) {
		mix.zip();
	}
});
