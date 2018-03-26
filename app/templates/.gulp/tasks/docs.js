const gulp = require('gulp')
const g = require('gulp-load-plugins')({lazy: true})
const path = require('path')
const fs = require('fs-then-native')
const jsdoc2md = require('jsdoc-to-markdown')

gulp.task('docs-api', () => {

})

gulp.task('docs-readme', () => {
  return g.docgen4NodeReadme.to('README.md')
    .pipe(gulp.dest('./'))
})

gulp.task('docs', ['docs-readme'])
