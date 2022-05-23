const fs = require('fs');
const path = require('path');
const { stdin, stdout, exit } = require('process');
const outputFile = path.join(__dirname, 'text.txt');
const output = fs.createWriteStream(outputFile);
stdout.write('Hello there! Could you enter some text there?\n');
stdin.on('data', data => {
    if (data.toString().trim() === 'exit') {
        EndOfWriting();
    }
    output.write(data);
});

process.on('SIGINT', EndOfWriting);

function EndOfWriting() {
    stdout.write('\nThank you. I hope you are enjoyed');
    exit();
}