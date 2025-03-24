const fs = require('fs')
const path = require('path')

// Source directory is in the repo directory
const sourceDir = path.join(__dirname, 'public', 'photos')
const targetDir = path.join(__dirname, 'public', 'photos')

// Create the target directory if it doesn't exist
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true })
}

// Skip copying since photos are already in the right place
console.log('Photos are already in the correct directory'); 