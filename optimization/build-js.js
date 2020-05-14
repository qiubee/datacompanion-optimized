const gulp = require("gulp");
const concat = require("gulp-concat");
const babel = require("gulp-babel");
const uglify = require("gulp-uglify");

function buildJS () {
	gulp.src("src/js/**/*.js", { nocomment: true })
		.pipe(babel({
			presets: ["babel-preset-env"]
		}))
		.pipe(uglify())
		.pipe(concat("index.min.js"))
		.pipe(gulp.dest("./public/js"));
}

buildJS();