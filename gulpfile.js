var gulp = require("gulp");
var sass = require("gulp-sass");
var prefixer = require("gulp-autoprefixer");

gulp.task("sass", function(){
  gulp.src("main.scss")
      .pipe(sass())
      .pipe(prefixer())
      .pipe(gulp.dest("css"));
});
