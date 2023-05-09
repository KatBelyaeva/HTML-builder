const path = require('path');
const fs = require('fs');
const copyFile = fs.promises.copyFile;

function copy() {
  const sourceFolder = path.join(__dirname,'files');

  fs.mkdir(path.join(__dirname,'files-copy'), {recursive: true}, err => {
      if (err) throw err;
      console.log('Ok');
  });

  fs.readdir(path.join(__dirname,'files-copy'), (err, files) => {
    if (err) throw err;
    files.forEach(file => {
      fs.unlink(path.join(__dirname,'files-copy', file), (err) => {
        if (err) throw err;
      });
    })
  });

  fs.promises.readdir(sourceFolder).then(files => {
    files.forEach(file => {
      copyFile(path.join(sourceFolder, file), path.join(__dirname, 'files-copy', file));
    })
  });
}

copy();
