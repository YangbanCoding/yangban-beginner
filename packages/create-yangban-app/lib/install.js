const spawn = require('cross-spawn')
const fs = require('fs')
const path = require('path')

const install = () => {
  return new Promise((resolve, reject) => {
    const webPath = path.resolve('.', 'web')

    if (fs.existsSync(webPath)) {
      const child = spawn('npm', ['install'], { stdio: 'inherit', cwd: webPath })  
  
      child.on('close', (code) => {
        resolve()
      })
    }
  })
}

module.exports = install
