const path = require('path');
const fs = require('fs');
const copyFile = fs.promises.copyFile;

function copy() {
  const sourceFolder = path.join(__dirname,'files');

  fs.mkdir(path.join(__dirname,'files-copy'), {
    recursive: true
    },
    (err => {
      if (err) {
        throw new Error('Error');
      }
      else {
        console.log('Ok');
      }
    })
  )

  fs.promises.readdir(sourceFolder).then(files => {
    files.forEach(file => {
      copyFile(path.join(sourceFolder, file), path.join(__dirname, 'files-copy', file));
    })
  })
}

copy();
