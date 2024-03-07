// Write a program to copy the content of one file to another.

const fs = require('fs');

try {
    fs.copyFile('Dummy.txt', 'Rummy.txt', (err)=>{
        if (err) console.log(err);
    })
} catch (err) {
    console.log(err);
}