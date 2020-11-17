const child_process = require('child_process')

const { execSync } = child_process

const gitInit = () => {
  try {
    execSync('git init')
    execSync('git checkout -b main')
    execSync('git add -A')
    execSync('git commit -m "양반코딩으로 시작함"')
  } catch(e) {
    console.error('git 초기화에 실패했습니다. 직접 초기화 해주세요')
    process.exit(1)
  }
}

module.exports = gitInit