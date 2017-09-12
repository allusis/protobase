var gulp           = require('gulp'),
    plumber        = require('gulp-plumber'),
    rename         = require('gulp-rename');
    autoprefixer   = require('gulp-autoprefixer'),
    concat         = require('gulp-concat'),
    uglify         = require('gulp-uglify'),
    pugInheritance = require('gulp-pug-inheritance'),
    pug            = require('gulp-pug'),
    //imagemin       = require('gulp-imagemin'),
    cache          = require('gulp-cache'),
    //sass           = require('gulp-sass'),
    browserSync    = require('browser-sync');

gulp.task('browser-sync', function() {
  browserSync({
    server: {
       baseDir: "./"
    }
  });
});

gulp.task('bs-reload', function () {
  browserSync.reload();
});

//gulp.task('images', function(){
//  gulp.src('img/**/*')
//    .pipe(cache(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true })))
//    .pipe(gulp.dest('img/'));
//});

//gulp.task('styles', function(){
//  gulp.src(['scss/**/*.scss'])
//    .pipe(plumber({
//      errorHandler: function (error) {
//        console.log(error.message);
//        this.emit('end');
//    }}))
//    .pipe(sass())
//    .pipe(autoprefixer('last 2 versions'))
//    .pipe(gulp.dest('css/'))
//    .pipe(browserSync.reload({stream:true}))
//});

//gulp.task('scripts', function(){
//  return gulp.src('js/**/*.js')
//    .pipe(plumber({
//      errorHandler: function (error) {
//        console.log(error.message);
//        this.emit('end');
//    }}))
//    .pipe(concat('main.js'))
//    .pipe(gulp.dest('js/'))
//    .pipe(rename({suffix: '.min'}))
//    .pipe(uglify())
//    .pipe(gulp.dest('js/'))
//    .pipe(browserSync.reload({stream:true}))
//});

gulp.task('documentation-templates', function() {
  return gulp.src('pug/pages/**/*.pug')
    .pipe(pug({
      pretty: true
    }))
    .pipe(gulp.dest('./views/'))
    .pipe(browserSync.reload({stream:true}))
});



gulp.task('default', ['browser-sync'], function(){
  //gulp.watch("scss/**/*.scss", ['styles']);
  //gulp.watch("js/**/*.js", ['scripts']);
  gulp.watch("*.html", ['bs-reload']);
  gulp.watch('pug/pages/documentation/**/*.pug',['documentation-templates']);
});
