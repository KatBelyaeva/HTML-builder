const { stdin, stdout, exit } = process;
const path = require('path');
const fs = require('fs');

const output = fs.createWriteStream(path.join(__dirname,'destination.txt'));

stdout.write('Привет! Введите текст:\n');
stdin.on('data', data => {
  if (data.toString().trim() === 'exit') {
    stdout.write('До свидания!');
    exit();
  } else {
    output.write(data.toString());
  }
});
process.on('SIGINT', () => {
  stdout.write('До свидания!');
  exit();
})
