const spawn = require('cross-spawn')
const fs = require('fs')
const path = require('path')

const install = () => {
  return new Promise((resolve, reject) => {
    const webPath = path.resolve('.', 'web')
    const appPath = path.resolve('.', 'app')
    const iosPath = path.resolve('.', 'app/ios')

    if (fs.existsSync(webPath)) {
      const child = spawn('yarn', ['install'], { stdio: 'inherit', cwd: webPath })  
  
      child.on('close', (code) => {
        resolve()
      })
    }

    if (fs.existsSync(appPath)) {
      const child = spawn('yarn', ['install'], { stdio: 'inherit', cwd: appPath })  
  
      child.on('close', (code) => {
        if (fs.existsSync(iosPath)) {
          const child = spawn('pod', ['install'], { stdio: 'inherit', cwd: iosPath })  
      
          child.on('close', (code) => {
            resolve()
          })
        } else {
          resolve()
        }
      })
    }
 
  })
}

module.exports = install
