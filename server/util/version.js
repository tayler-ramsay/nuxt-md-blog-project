const TAG = '{{ tag }}'
const COMMIT_HASH = '{{ commitHash }}'
const COMMIT_DATE = '{{ commitDate }}'
const DIRTY = '{{ dirty }}'
const BRANCH = '{{ branch }}'
const BUILD_DATE = '{{ date }}'
const BUILD_AUTHOR = '{{ author }}'

module.exports.getInfo = function() {
  return {
    tag: TAG.includes('{{') ? '' : TAG,
    commitHash: COMMIT_HASH.includes('{{') ? '' : COMMIT_HASH,
    commitDate: COMMIT_DATE.includes('{{') ? '' : COMMIT_DATE,
    dirty: DIRTY.includes('{{') ? '' : DIRTY,
    branch: BRANCH.includes('{{') ? '' : BRANCH,
    date: BUILD_DATE.includes('{{') ? '' : BUILD_DATE,
    author: BUILD_AUTHOR.includes('{{') ? '' : BUILD_AUTHOR
  }
}

