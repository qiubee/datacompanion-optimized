const gulp = require("gulp");

function fonts () {
	return gulp.src("src/fonts/*.+(otf|ttf)")
		.pipe(gulp.dest("./public/fonts"));
}

function assets () {
	return gulp.src(["src/manifest.webmanifest", "src/service-worker.js"])
		.pipe(gulp.dest("./public"));
}

function buildAssets () {
	fonts();
	assets();
}

return buildAssets();