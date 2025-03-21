//READ FILES
var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
    //The fs.readFile() method is used to read files on your computer
    //readFile not readfile
    fs.readFile('demofile1.html', function(err, data) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
    });
}).listen(8080);
// var http = require('http');
// var fs = require('fs');
// http.createServer(function (req, res) {
//   //Open a file on the server and return its content:
//   fs.readFile('demofile1.html', function(err, data) {
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.write(data);
//     return res.end();
//   });
// }).listen(8080);

//create Files
//The fs.appendFile() method appends specified content to a file. If the file does not exist, the file will be created:
var fs = require('fs');

fs.appendFile('mynewfile1.txt', 'Hello Overnight!', function(err){
    if (err) throw err;
    console.log('saved!');
});

//The fs.open() method takes a "flag" as the second argument, if the flag is "w" for "writing", the specified file is opened for writing. If the file does not exist, an empty file is created:
var fs = require('fs');

fs.open('mynewfile2.txt', 'w', function (err, file){
    if (err) throw err;
    console.log('saved!');
});

//The fs.writeFile() method replaces the specified file and content if it exists. If the file does not exist, a new file, containing the specified content, will be created:
var fs = require('fs');

fs.writeFile('mynewfile3.txt', 'Hello Overnight', function(err){
    if (err) throw err;
    console.log('saved!');
});

//update files
//to update and replace

//The fs.appendFile() method appends the specified content at the end of the specified file:
var fs = require('fs');

fs.appendFile('mynewfile1.txt', 'This is my text.', function(err){
    if (err) throw err;
    console.log('Updated!');
});

//The fs.writeFile() method replaces the specified file and content:
var fs = require('fs');

fs.writeFile('mynewfile3.txt', 'This is my new text', function(err){
    if (err) throw err;
    console.log('Replaced!');
})

//delete files
//To delete a file with the File System module,  use the fs.unlink() method.
//The fs.unlink() method deletes the specified file:

var fs = require('fs');
fs.unlink('mynewfile2.txt', function(err){
    if (err) throw err;
    console.log('File Deleted!');
});

//Rename File
//To rename a file with the File System module,  use the fs.rename() method.
//The fs.rename() method renames the specified file:

var fs = require('fs');
fs.rename('mynewfile1.txt', 'myrenamedfile.txt', function(err){
    if (err) throw err;
    console.log('File Renamed');
});