
const fs = require('fs');
const path = require('path');

const dirPath = path.join(__dirname, 'secret-folder');

fs.readdir(dirPath, { withFileTypes: true }, (err, files) => {
    if (err)
        console.log(err);
    else {
        files.forEach(file => {
            if (file.isFile()) {
                let fileName = file.name.split('.')[0];
                let fileExtension = path.extname(file.name).substr(1);
                let fileSize = 0;
                fs.stat(path.join(__dirname, 'secret-folder', file.name), (err, stats) => {
                    if (err) {
                        console.log(err);
                    } else {
                        fileSize += stats.size / 1024;
                    }
                    console.log((`${fileName} - ${fileExtension} - ${fileSize}kb`));
                })

            }
        })
    }
})