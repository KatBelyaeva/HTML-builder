const { stdout } = process;
const path = require('path');
const fs = require('fs');

const secretFolder = path.join(__dirname,'secret-folder');
fs.readdir(secretFolder, { withFileTypes: true }, (err, files) => {
  if (err)
    console.log(err);
  else {
    files.forEach(file => {
      if (file.isFile()) {
        let name = path.parse(path.join(secretFolder, file.name)).name;
        let ext = path.parse(path.join(secretFolder, file.name)).ext.slice(1);
        fs.stat((path.join(secretFolder, file.name)), function(err, stats) {
          if (err)
            console.log(err);
          else {
            let size = Number(stats["size"]/1000).toFixed(3);
            stdout.write(`${name} - ${ext} - ${size}kb\n`);
          }
        })
      }
    })
  }
})
