const path = require('path');
const fs = require('fs');

const output = fs.createWriteStream(path.join(__dirname, 'project-dist', 'bundle.css'));

fs.readdir(path.join(__dirname, 'styles'), { withFileTypes: true }, (err, files) => {
  if (err) throw err;
  else {
    files.forEach(file => {
      let ext = path.parse(path.join(__dirname, 'styles', file.name)).ext;
      let name = path.parse(path.join(__dirname, 'styles', file.name)).base;
      if (file.isFile() && ext === '.css') {
        const input = fs.createReadStream(path.join(__dirname, 'styles', name));
        input.on('data', data => {
          output.write(data.toString() + '\n');
        })
      }
    })
  }
})
