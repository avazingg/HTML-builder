
const path = require('path');
const fs = require('fs').promises;

async function copyDirectory(folder, folderCopy) {

    const folderFiles = path.join(__dirname, folder);
    const folderCopyFiles = path.join(__dirname, folderCopy);

    await fs.mkdir(folderCopyFiles, { recursive: true });

    let files = await fs.readdir(folderCopyFiles);

    for (let file of files) {
        await fs.rm(path.join(folderCopyFiles, file));
    }

    files = await fs.readdir(folderFiles);

    for (let file of files) {
        await fs.copyFile(path.join(folderFiles, file),
            path.join(folderCopyFiles, file));
    }

}

copyDirectory('files', 'files-copy');