const { 
  src, 
  dest, 
  series,
} = require('gulp');
const color = require('gulp-color');

function copy_build_before_deploy (cb){
    console.log (color('Copying ./build to ./firebase/build prior to firebase deployment', 'GREEN'));
    return src('./build/**/*').pipe(dest('firebase/build'));
}
exports.deploy = series(copy_build_before_deploy);
