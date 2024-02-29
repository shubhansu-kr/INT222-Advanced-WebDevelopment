// There are three methods to delete a file in JS

// Unlink: Deletes the file (Cannot delete a dir)
// rm : Deletes a file/dir
// 

const fs = require('fs');
fs.unlink('Dummy.txt', function(err) {
    if (err) {
        console.error(err);
    }
});

fs.copyFile('Learnings/09_FileSys.js', 'Dummy.txt', (err)=>{if (err) console.log(err);});