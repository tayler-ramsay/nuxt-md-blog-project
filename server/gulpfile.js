const os = require('os')
const gulp = require('gulp')
const run = require('gulp-run')
const gulpClean = require('gulp-clean')
const replace = require('gulp-replace')
const git = require('git-rev-sync')

function clean () {
  console.log('Start cleaning old builds.')
  return gulp.src('dist', { read: false, allowEmpty: true })
    .pipe(gulpClean())
}

function copyFiles () {
  console.log('Copying files to dist directory.')
  return gulp.src(['**/*', '!node_modules/**', '!config/local*.yaml'])
    .pipe(gulp.dest('dist'))
}

function version () {
  let index = process.argv.indexOf('--releaseVersion')
  if (index > -1) {
    let releaseVersion = process.argv[ index + 1 ]
    console.log('Release version is :' + releaseVersion)
    return gulp.src('package.json')
      .pipe(replace(/(\"version\"\s*:\s*\"\d+\.\d+\.\d+)(\"|\-SNAPSHOT\")/,
        '"version' + '": "' + releaseVersion + '"'))
      .pipe(gulp.dest('./', { overwrite: true }))
  } else {
    console.log('Version is not send as buildw arguments')
    throw new Error('Version is not send as buildw arguments')
  }
}

function gitInfo () {
  console.log('Generating build info.')

  return gulp.src('dist/util/version.js')
    .pipe(replace('{{ tag }}', git.tag()))
    .pipe(replace('{{ commitHash }}', git.long()))
    .pipe(replace('{{ commitDate }}', git.date().toISOString()))
    .pipe(replace('{{ dirty }}', git.isDirty()))
    .pipe(replace('{{ branch }}', git.branch()))
    .pipe(replace('{{ author }}', os.userInfo().username))
    .pipe(replace('{{ date }}', new Date().toISOString()))
    .pipe(gulp.dest('dist/util/', { overwrite: true }))
}

function copyPackageJson () {
  console.log('Copying package.json file to build directory.')
  return gulp.src('package.json').pipe(gulp.dest('dist/'))
}

function installingDependencies () {
  process.env.NODE_ENV = 'production'
  process.chdir('dist/')
  console.log('Running npm install to fetch bundle dependencies.')
  return run('npm install').exec()
}

const build = gulp.series(copyFiles, version, gitInfo, copyPackageJson, installingDependencies)

exports.build = build
exports.clean = clean
exports.default = gulp.series(clean, build)
