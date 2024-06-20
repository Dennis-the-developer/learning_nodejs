import { createServer } from 'node:http';
import { unlink, writeFile } from 'node:fs';

// Create HTTP Server
const server = createServer((req, res) => {
    console.log(req.url);
    if (req.url.includes('create')) {
        // create file
        writeFile('./abc.html', '<h1>Learning Node.js</h1>', (err) => {
            console.log(err);
            // Return response
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end('<h1>We have an HTTP Server</h1>');
        });

    } else {
        // Delete file
        unlink('./hello.html', () => {
            // Return response
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end('<h1>File deleted</h1>');
        });
    }

});

// Listen for incomming request
server.listen(3000, '127.0.0.1', () => {
    console.log('Server is running');
});


// Normal function vs Arrow Function
// function handleRequest() { }
// const handleRequest = () => { }
