const { dest, watch } = require('gulp');
const rename = require('gulp-rename');
const ts = require('gulp-typescript');

const tsProject = ts.createProject('./tsconfig.json');

const build = () =>
    tsProject
        .src()
        .pipe(tsProject())
        .js
        .pipe(rename({
            extname: '.jsx',
        }))
        .pipe(dest('./dest'));

exports.default = build;

exports.watch = () => watch('src/**/*.ts', build);
