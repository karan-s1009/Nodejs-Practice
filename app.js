// -----Modules-----

// A. FS (File System)
const fs = require('fs');

// 1. Reading from a file
// fs.readFile('example.txt', 'utf8', (err, data) => {
//     if(err){
//         console.error(err);
//         return;
//     }
//     console.log(data);
// })

// 2. Writing to a file (creates new if does not exist)
// const content = "Hello, Karan!";
// fs.writeFile('output.txt', content, (err) => {
//     if(err){
//         console.error(err);
//         return;
//     }
//     console.log("File written Successfully!");    
// })


// B. HTTP (Hyper Text Transfer Protocol)
const http = require('http');
 
// const server = http.createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/plain');
//     res.end("Wayne Enterprises");
// });
// server.listen(3000, () => {
//     console.log("Server running at http://localhost:3000");
// })


// C. Path
const path = require('path');

// const directory = 'user/local';
// const fileName = 'example.txt';
// const fullPath = path.join(directory, fileName);
// console.log(fullPath);


// D. OS (Operating System)
const os = require('os');

// console.log('Platform: ', os.platform());
// console.log('CPU Architecture: ', os.arch());
// console.log('Total Memory: ', os.totalmem());
// console.log('Free Memory: ', os.freemem());


// E. URL (Uniform Resource Locator)
const url = require('url');

// const myUrl = new URL('https://example.com:8080/path/name?query=hello#hash');
// console.log('Host:', myUrl.host);
// console.log('Pathname:', myUrl.pathname);
// console.log('Search Parameters:', myUrl.searchParams.get('query'));


// F. Crypto
const crypto = require('crypto');

// const hash = crypto.createHash('sha256');
// hash.update('Hello World');
// console.log(hash.digest('hex'));


// G. Custom Module

// 1. Single Export
const sayHello = require('./greetings');
// const message = sayHello("Karan");
// console.log(message);

// 2. Multiple Exports
const math = require('./math')
// console.log(math.add(3, 5));
// console.log(math.subtract(8, 1));



// -----NPM (Node Package Manager)-----
const lodash = require('lodash');
// const numbers = [1,2,3,4,5];
// const reversed = lodash.reverse(numbers);
// console.log(reversed);



// -----Streams(file system)-----

// A. Readable Stream

// const readableStream = fs.createReadStream('example.txt', {encoding: 'utf8'});
// readableStream.on('data', (chunk) => {
//     console.log(chunk);    
// })
// readableStream.on('end', () => {
//     console.log("Reading Finished!");    
// })
// readableStream.on('error', (err) => {
//     console.error('Error', err);
// })


// B. Writable Stream

// const writableStream = fs.createWriteStream('output2.txt');
// writableStream.write('Hello, ');
// writableStream.write('Gotham City');
// writableStream.end();
// writableStream.on('finish', () => {
//     console.log('Finished writing to the file');
// })


// C. Piping Stream

// const readableStream = fs.createReadStream('example.txt');
// const writableStream = fs.createWriteStream('example-output.txt');
// readableStream.pipe(writableStream);
// writableStream.on('finish', () => {
//     console.log('File Copied Successfully!');    
// })


// D. Reading line by line (For large files)

const readline = require('readline');
// const readableStream = fs.createReadStream('example.txt');
// const rl = readline.createInterface({input: readableStream});
// rl.on('line', (line) => {
//     console.log('Line:', line);    
// })
// rl.on('close', () => {
//     console.log('Finished processing the File');    
// })



// -----Directories-----

// 1. Creating Directory

// A. Ashynchronous Method
// fs.mkdir('newDirectory', (err) => {
//     if(err) {
//         return console.error('Error creating directory:', err);
//     }
//     console.log('Directory created successfully');
// })

// B. Synchronous Method
// fs.mkdirSync('newDirectory2');
// console.log('Directory created successfully');


// 2. Reading Directory

// A. Asynchronous
// fs.readdir('./', (err, files) => {
//     if(err){
//         return console.error('Error reading directory', err);
//     }
//     console.log('Directory content', files);    
// })

// B. Synchronous
// const files = fs.readdirSync('./')
// console.log('Directory content', files);


// 3. Checking for an existing directory

// const dirName = 'newDirectory';
// if(fs.existsSync(dirName)){
//     console.log('Directory exists');
// }
// else{
//     console.log('Directory does not exists!!!')
// }


// 4. Removing a directory

// A. Removing empty directory
// fs.rmdir('newDirectory', (err) => {
//     if(err){
//         return console.error('Error removing directory!!!', err)
//     }
//     console.log('Directory removed successfully')
// })

// B. Removing directory with some files in it
// fs.rm('newDirectory2', {recursive: true}, (err) => {
//     if(err){
//         return console.error('Error removibg directory!!!', err)        
//     }
//     console.log('Directory removed successfully');   
// })


// 5. Renaming a directory
// fs.rename('folder1', 'folder2', (err) => {
//     if(err){
//         return console.error('Error renaming directory!!!', err);
//     }
//     console.log('Directory renamed successfully');
// })


// 6. Directory stats
// fs.stat('./', (err, stats) => {
//     if(err){
//         return console.error(err);
//     }
//     console.log('Directory Stats:', stats);
//     console.log('Is Directory ?:', stats.isDirectory());
// })


// 7. Watching a directory
// fs.watch('./', (eventType, filename) => {
//     console.log(`Event: ${eventType}`);
//     if(filename){
//         console.log(`Filename: ${filename}`);        
//     }
// })



// -----Event Emitters-----
const EventEmitter = require('events');
const emitter = new EventEmitter();

// 1. Registering an Event
// emitter.on('test1', () => {
//     console.log('An event has occured in test 1');
// })


// 2. Adding multiple listeners on single event
// emitter.on('test1', () => {
//     console.log('An event has occured in test 1');
// })
// emitter.on('test1', () => {
//     console.log('An event has occured in test 2');
// })
// emitter.emit('test1');


// 3. Removing the listener
// emitter.on('test1', () => {
//     console.log('An event has occured in test 1');
// });
// emitter.emit('test1');
// emitter.removeListener('test1');
// emitter.emit('test1');


// 4. Error Handling in Events
emitter.on('test1', () => {
    console.log('An event has occured in test 1');
})
emitter.on('error', (err) => {
    console.error('Error event: ', err.message)
})
try {
    emitter.emit('test1');
    emitter.removeListener('test1');
    emitter.emit('test1');
} catch (error) {
    emitter.emit('error', error);
}