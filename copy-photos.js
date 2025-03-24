const fs = require('fs')
const path = require('path')

const sourceDir = path.join(__dirname, '..', 'photos')
const targetDir = path.join(__dirname, 'public', 'photos')

// Create the target directory if it doesn't exist
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true })
}

// Copy all photos from the source directory to the target directory
fs.readdirSync(sourceDir).forEach(file => {
  if (file.match(/\.(jpg|jpeg|png|gif)$/i)) {
    fs.copyFileSync(
      path.join(sourceDir, file),
      path.join(targetDir, file)
    )
    console.log(`Copied ${file} to public/photos/`)
  }
}) 