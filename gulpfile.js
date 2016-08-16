//Use the required plugins
var gulp = require('gulp');
var browserSync = require('browser-sync');
var useref = require('gulp-useref');
var uglify = require('gulp-uglify');
var gulpIf = require('gulp-if');
var cssnano = require('gulp-cssnano');
var del = require('del');
var runSequence = require('run-sequence');
var ngAnnotate = require('gulp-ng-annotate');

//sample task
gulp.task('sample',function(){
    //Write the task here and run using "gulp sample"
    console.log("Sample task");
})

//For server hosting use BrowserSync
gulp.task('browserSync', function() {
    browserSync.init({
        notify: false,
        server: {
            baseDir: 'app',
        }
    });
});

/****************************************

Use this command "gulp serve" to host the app on local server.
In this task, gulp watches the specified files for changes and reloads the browser on every change made.

****************************************/

gulp.task('serve', ['browserSync'], function() {
    // Reloads the browser whenever HTML or JS or CSS files change and Uses browserSync.reload to reload the browser
    gulp.watch('app/css/*.css', browserSync.reload);
    gulp.watch('app/**/*.html', browserSync.reload);
    gulp.watch('app/js/**/*.js', browserSync.reload);

});


/****************************************

The tasks given below are for distribution.
These tasks are used to create a dist folder for distribution purpose in which files are minified and could be pushed for publishing.
The command for this is "gulp build".

****************************************/

//This is a sub-task for minifying js files
//In index.html it changes all the script tags within "<!--build:" and "<!--endbuild-->" into one single JavaScript file that points to `js/main.min.js`(the file name specified).
//Check index.html for sample
//Have a look at the documentation of useref for more information

gulp.task('js', function(){
    return gulp.src('app/*.html')
        .pipe(useref())
        //Uses annotation for possible injection errors
        .pipe(gulpIf('*.js', ngAnnotate()))
        // Minifies only if it's a JavaScript file
        .pipe(gulpIf('*.js', uglify()))
        .pipe(gulp.dest('dist'))
});

//This is a sub-task used to minify CSS files using cssnano
gulp.task('css', function() {     
    return gulp.src('app/css/*')
        // Minifies only if it's a CSS file
        .pipe(gulpIf('*.css', cssnano()))
        .pipe(gulp.dest('dist/styles')); 
});

//This sub-task cleans the distribution folder everytime before "gulp build is used"
gulp.task('clean:dist', function() {
    return del.sync('dist/*');
});

//This sub-task pipes the images to dist folder
gulp.task('images', function() {
    return gulp.src('app/images/**/*')
        .pipe(gulp.dest('dist/images'));
});

//This sub-task pipes all the views to the dist folder
gulp.task('views', function() {
    return gulp.src('app/views/*')
        .pipe(gulp.dest('dist/views'));
});

//This sub-task pipes all fonts to the dist folder
gulp.task('fonts', function() {
    return gulp.src('app/fonts/**/*')
        .pipe(gulp.dest('dist/fonts'))
})

//This sub-task pipes the index.html and the icons to the dist folder
gulp.task('index', function() {
    return gulp.src(['app/*.html','app/*.png'])
        .pipe(gulp.dest('dist/'));
});


/****************************************

This is the main task, which should be used as "gulp build" to push the app to distribution
It uses runSequence to run all the gulp sub-tasks in sequence.

****************************************/

gulp.task('build', function(callback) {
    runSequence('clean:dist', ['js', 'css', 'images', 'views', 'index'],
        callback
    );
});
