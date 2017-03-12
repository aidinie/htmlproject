/**
 * Created by nad on 2017/3/12.
 */
var gulp=require('gulp');
var sass=require('gulp-sass');
var connect=require('gulp-connect');
gulp.task('test',function () {
   console.log('haha');
});
gulp.task('test2',function () {
   console.log('heihei');
});
gulp.task('default',['test','test2']);
//复制
gulp.task('test3',function () {
    gulp.src('index.html').pipe(gulp.dest('dest/')).pipe(connect.reload());
});
gulp.task('watch',function () {
    gulp.watch('index.html',['test3']);
    gulp.watch('index.scss',['sass']);
});
gulp.task('copy-img',function () {
   gulp.src('src/image/**/*.jpg').pipe(gulp.dest('dest/img'));
});
gulp.task('sass',function () {
   gulp.src('index.scss').pipe(sass()).pipe(gulp.dest('dest/css')).pipe(connect.reload());
});
gulp.task('servers',function () {
   connect.server({
       root:'dest',
       livereload:true,
   })
});
gulp.task('a',['servers','watch']);