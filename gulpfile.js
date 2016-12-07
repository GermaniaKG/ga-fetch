// Grundlegendes
var gulp          = require ("gulp");

// Plugins einbauen
var jshint       = require ("gulp-jshint"),
    uglify       = require ("gulp-uglify"),
    concat       = require ("gulp-concat"),
    sourcemaps   = require('gulp-sourcemaps');


var GLOB_JS      = "./src/**/*.js",
    DIST_JS      = './dist';


// ================================
// Scripts
// ================================


gulp.task("lint", function() {
    return gulp.src( GLOB_JS )
        .pipe(jshint(".jshintrc"))
        .pipe(jshint.reporter("jshint-stylish"));
});


gulp.task('js', ["lint"], function () {
   return gulp.src( GLOB_JS )
      .pipe(sourcemaps.init())
      .pipe(uglify())
      .pipe(sourcemaps.write())
      .pipe(gulp.dest( DIST_JS ));
});



// ================================
// Common tasks
// ================================


//
// Rerun the task when a file changes
//
gulp.task('default', ["js"]);



//
// Development builds:
// Rerun the task when a file changes
//
gulp.task('watch', function () {

    gulp.watch( GLOB_JS,  ["js"]);

});

