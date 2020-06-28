/**
 * 引入 gulp
 */
const gulp = require('gulp') // 基础库

/**
 * 版本信息
 */
// const pkg = require('./package.json')
// const gulpSequence = require('gulp-sequence')

/**
 * gulp 模块化管理工具
 */
const gulpLoadPlugins = require('gulp-load-plugins') // 模块化管理
const $ = gulpLoadPlugins() // 定义变量

const jsSrc = './src/*.js'

gulp.task('dev', function () {
  return gulp.src(jsSrc)
    .pipe(gulp.dest('./dist'))
    .pipe($.webpack({ // babel编译import会转成require，webpack再包装以下代码让代码里支持require
      output: {
        filename: 'descartes-sku.js'
      },
      stats: {
        colors: true
      }
    }))
    .pipe(gulp.dest('./dist'))
})

/**
 * type，可接受的值包括下面四个，倘若现在的版本号为1.2.3，则对应的新版本号为：
 * prerelease：1.2.3-0
 * patch：1.2.4
 * minor：1.3.0
 * major：2.0.0
 */
gulp.task('bump:patch', function () {
  return gulp.src(['./package.json', './bower.json'])
    .pipe($.bump({
      type: 'patch'
    }))
    .pipe(gulp.dest('./'))
})
gulp.task('bump:prerelease', function () {
  return gulp.src(['./package.json', './bower.json'])
    .pipe($.bump({
      type: 'prerelease'
    }))
    .pipe(gulp.dest('./'))
})
gulp.task('bump:minor', function () {
  return gulp.src(['./package.json', './bower.json'])
    .pipe($.bump({
      type: 'minor'
    }))
    .pipe(gulp.dest('./'))
})
gulp.task('bump:major', function () {
  return gulp.src(['./package.json', './bower.json'])
    .pipe($.bump({
      type: 'major'
    }))
    .pipe(gulp.dest('./'))
})

gulp.task('watch', function () {
  gulp.watch(jsSrc, ['dev'])
})
