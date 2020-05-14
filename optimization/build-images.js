const gulp = require("gulp");
const imagemin = require('gulp-imagemin');

function minimizeImages () {
	gulp.src("src/images/**/*.+(png|jpg)")
		.pipe(imagemin([
			imagemin.mozjpeg({ quality: 50 }),
			imagemin.optipng({ optimizationLevel: 4 })
		]))
		.pipe(gulp.dest("./public/images"));
}

minimizeImages();