var gulp=require('gulp'),
    fs = require('fs-extra'),
    concat=require('gulp-concat'),
    uglify = require('gulp-uglify'),
    BUILD_JSON=require('./build.json'),
    BUILD_NAME='mutation.summary.js',
    MIN_NAME='mutation.summary.min.js',
    REPO_NAME='mutation sumary',
    DIST='./dist';


gulp.task('default',function(){
    console.log(REPO_NAME + ' ..."tasks: gulp build|gulp minify"');
});

gulp.task('build',function(){
    concatFileStream(BUILD_JSON,DIST,BUILD_NAME);
});

gulp.task('minify',function(){
    concatFileStream(BUILD_JSON,DIST,MIN_NAME);
});

function srcStream(src){
    if(src===undefined) src=BUILD_JSON;
    return gulp.src(src);
}

function concatStream(name,src){
    if(src===undefined) src=BUILD_JSON;
    return srcStream(src)
        .pipe(concat(name))
}

function fileStream(src,dest){
    gulp.src(src)
        .pipe(gulp.dest(dest));
}

function concatFileStream(src,dest,name){
    gulp.src(src)
        .pipe(concat(name))
        .pipe(gulp.dest(dest));
}

function minFileStream(src,dest,name){
    gulp.src(src)
        .pipe(concat(name))
        .pipe(uglify())
        .pipe(gulp.dest(dest));
}