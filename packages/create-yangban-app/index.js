#!/usr/bin/env node

const { program } = require('commander')
const createApp = require('./lib/createApp')
const isDirEmpty = require('./lib/isDirEmpty')
const path = require('path')

program
.requiredOption('-e, --example [name]', 
`
만들고 싶은 예제 이름을 적어 주세요
예) npx create-yangban-app --example [예제이름]
`
)
.parse(process.argv)

const run = async () => {
  const example = typeof program.example === 'string' && program.example.trim()

  try {
    const isEmpty = await isDirEmpty(path.resolve('.'))
    if (!isEmpty) {
      console.error('현재 폴더에 파일이 존재합니다. 빈 폴더에서 실행해 주세요.')
      process.exit(1)
    }

    await createApp({ example })
  } catch (e) {
    console.log(`
    명령을 실행할 수 없습니다 다시 확인해 주세요\n
    예) npx create-yangban-app --example [예제이름]
    `)
  }
}

run()
