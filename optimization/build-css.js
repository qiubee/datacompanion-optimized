const gulp = require("gulp");
const concat = require("gulp-concat");
const csso = require("gulp-csso");

function buildCSS () {
	gulp.src("src/css/**/*.css")
		.pipe(csso())
		.pipe(concat("index.css"))
		.pipe(gulp.dest("./public/css"));
}

buildCSS();