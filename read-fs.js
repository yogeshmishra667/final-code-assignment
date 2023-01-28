const fs = require('fs');

fs.readdir('.', (err, files) => { // '.' is the current directory
  if (err) throw err;image.png
  for (const file of files) {
    console.log(file);
  }
});
