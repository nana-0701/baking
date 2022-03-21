const { src, dest, watch, series} = require('gulp');
const sass = require('gulp-sass');
const plumber = require('gulp-plumber'); 
const notify = require('gulp-notify'); 
const postcss = require('gulp-postcss'); 
const autoprefixer = require('autoprefixer'); 
const cssdeclsort = require('css-declaration-sorter');
const fiber = require('fibers');

sass.compiler = require("sass");

//sorce path
const srcPath = {
  scss: './scss/style.scss',
};
 
//dest path
const destPath = {
css: './css/',
};

const cssSass = () => {
  return src(srcPath.scss) 
    .pipe( plumber({ errorHandler: notify.onError("Error: <%= error.message %>") }) )
    .pipe(sass({
      fiber: fiber,
      outputStyle: "expanded"
    }))
    .pipe( postcss([ autoprefixer(
      {"overrideBrowserslist": ["last 2 versions", "ie >= 11", "Android >= 5"],
      cascade: false}
    ) ]) )
    .pipe( postcss([ cssdeclsort({ order: 'alphabetical' }) ]) )
    .pipe(dest(destPath.css));
 };
 
exports.sass = series(cssSass);


