const got = require('got')
const gitInit = require('./gitInit')
const downloadExample = require('./downloadExample')
const install = require('./install')
const finishMessage = require('../constants/finishMessage')

const isUrlOk = async (url) => {
  const res = await got.head(url).catch(e => e)
  return res.statusCode === 200
}

const createApp = async ({ example }) => {
  try {
    const isValidExample = await isUrlOk(`https://github.com/YangbanCoding/yangban-beginner/tree/main/examples/${example}`)
    if (!isValidExample) {
      console.error(`${example} 예제가 존재하지 않습니다. 다시 확인해 주세요`)
      process.exit(1)
    }

    await downloadExample(example)

    await install()

    await gitInit()

    console.log(finishMessage(example))

  } catch(e) {
    console.error('오류가 발생했습니다 다시 시도해 주세요 ')
    process.exit(1)
  } finally {
  }
}

module.exports = createApp