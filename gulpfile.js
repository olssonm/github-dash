var gulp = require('gulp');
var zip = require('gulp-zip');
var elixir = require('laravel-elixir');
var argv = require('yargs').argv;
var del = require('del');

var Task = elixir.Task;

/**
 * Remove-method to clear build-folder
 * @param  string path [description]
 * @return elixir.Task
 */
elixir.extend('remove', function(path) {
    new Task('remove', function() {
		return del(path);
    });
});

/**
 * Zip-method for packaging build
 * @return elixir.Task
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

    mix.remove('./build');

    mix.scripts([
    		'./src/js/jquery.min.js',
    		'./src/js/github-dash.js'
    	], './build/src/js/github-dash.min.js')
        .styles([
    		'./src/css/github-dash.css'
    	], './build/src/css/github-dash.min.css')
        .copy('./**.md', './build/')
        .copy('./src/html', './build/src/html')
        .copy('./src/icons', './build/src/icons')
        .copy('./manifest-ship.json', './build/manifest.json');

	if (zip) {
		mix.zip();
	}
});
