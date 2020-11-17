const fs = require('fs')
const path = require('path')

const isDirEmpty = (dirname) => {
  return fs.promises.readdir(dirname).then(files => {
    return files.length === 0
  })
}

module.exports = isDirEmpty