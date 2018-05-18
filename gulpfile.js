var gulp = require('gulp')
var zip = require('gulp-zip')
path = require('path')

gulp.task('zip', function () {
	return gulp
		.src([
			'./src/icons/*.png',
			'./src/css/github-dash.css',
			'manifest.json'
		], {
			base: '.'
		})
		.pipe(zip('github-dash.zip'))
		.pipe(gulp.dest('./ship'))
});
