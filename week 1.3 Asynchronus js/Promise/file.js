// Code is not working

const fs = require('fs');

function callback( err, data){
    if (err) {
    console.error('Error reading the file:', err);
  } else {
    console.log(data);
  }
}

// fs.readFile('file.txt','utf8',callback);
fs.readFile('file.txt','utf8')
        .then(callback)