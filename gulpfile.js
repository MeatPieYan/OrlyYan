const gulp = require('gulp');
const babel = require('gulp-babel');
const sourcemaps = require('gulp-sourcemaps');

const path = {
  script: "src/**/*.js"
};

gulp.task('es7', ()=>{
  return gulp.src('src/**/*.js')
            .pipe(sourcemaps.init())
            .pipe(babel({
              plugins: ['transform-runtime'],
              presets: ['es2015','stage-3']
            }))
            .pipe(gulp.dest('build'));
});

gulp.task('watch',() => {
  gulp.watch(path.script, ['es7']);
});

gulp.task('default', ['es7', 'watch']);
