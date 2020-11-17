const got = require('got')
const tar = require('tar')
const stream = require('stream')
const util = require('util')
const path = require('path')

const pipeline = util.promisify(stream.Stream.pipeline)

const downloadExample = async (example) => {
  return pipeline(
    got.stream(
      `https://codeload.github.com/yangbancoding/yangban-beginner/tar.gz/main`
    ),
    tar.extract({ cwd: path.resolve('.'), strip: 3 }, [`yangban-beginner-main/examples/${example}`])
  )
}

module.exports = downloadExample