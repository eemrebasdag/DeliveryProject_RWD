const gulp = require('gulp');
const sass =  require('gulp-sass')(require('sass'));

function compileSass(done){
        gulp.src('./scss/main.scss')
            .pipe(sass({outputStyle: 'compressed'}).on('error',sass.logError))
            .pipe(gulp.dest('./css'))
        
            done();
        
}

exports.compileSass =compileSass;
exports.default = gulp.parallel(compileSass);