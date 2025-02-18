// -----HTTP (Request and Response Handling)-----
const http = require('http');

// 1. GET Request
// const server = http.createServer((req, res) => {
//     if(req.method === 'GET' && req.url === '/'){
//         res.writeHead(200, {'content-type': 'text/plain'});
//         res.end('Welcome to Homepage');
//     }else{
//         res.writeHead(404, {"content-type": 'text/plain'});
//         res.end('Page not found');
//     }
// })
// const PORT = 3000;
// server.listen(PORT, () => {
//     console.log(`Server is running at http://localhost:${PORT}`);
// }) 


// 2. POST Request
// const server = http.createServer((req, res) => {
//     if(req.method === 'POST' && req.url === '/submit'){
//         let body = '';
//         req.on('data', (chunk) => {
//             body += chunk.toString();
//         });
//         req.on('end', () => {
//             res.writeHead(200, {'content-type': 'application/json'});
//             res.end(JSON.stringify({message: 'Data Received', data:body}))
//         })
//     }else{
//         res.writeHead(404, {'content-type': 'text/plain'});
//         res.end('Route Not Found')
//     }
// })
// const PORT = 3000;
// server.listen(PORT, () => {
//     console.log(`Server is running at http://localhost:${PORT}`);
// }) 


// 3. Query Request
const url = require('url');
// const server = http.createServer((req, res) => {
//     if(req.method === 'GET' && req.url.startsWith('/search')){
//         const queryObject = url.parse(req.url, true).query;
//         res.writeHead(200, {
//             'content-type': 'application/json'
//         });
//         res.end(JSON.stringify({message: 'Query Received', queryObject}))
//     }else{
//         res.writeHead(404, {'content-type': 'text/plain'});
//         res.end('Route Not Found');
//     }
// })
// const PORT = 3000;
// server.listen(PORT, () => {
//     console.log(`Server is running at http://localhost:${PORT}`);
// }) 


// 4. Custom Response Headers
// const url = require('url');
// const server = http.createServer((req, res) => {
//     if(req.method === 'GET' && req.url.startsWith('/search')){
//         const queryObject = url.parse(req.url, true).query;
//         res.writeHead(200, {
//             'content-type': 'application/json', 
//             'custom-header': 'Node JS Server',
//             'custom-tracking': '1234'
//         });
//         res.end(JSON.stringify({message: 'Query Received', queryObject}))
//     }else{
//         res.writeHead(404, {'content-type': 'text/plain'});
//         res.end('Route Not Found');
//     }
// })
// const PORT = 3000;
// server.listen(PORT, () => {
//     console.log(`Server is running at http://localhost:${PORT}`);
// }) 



// -----Route Handler-----

// 1. Simple Routes
// const routes = {
//     '/' : (req, res) => {
//         res.writeHead(200, {'content-type': 'text/plain'});
//         res.end('Welcome to Homepage');
//     },
//     '/about' : (req, res) => {
//         res.writeHead(200, {'content-type': 'text/plain'});
//         res.end('This is the About Page');
//     },
//     '/notfound' : (req, res) => {
//         res.writeHead(404, {'content-type': 'text/plain'});
//         res.end('Page Not Found');
//     },
// }
// const server = http.createServer((req, res) => {
//     const { pathname } = url.parse(req.url)
//     if(routes[pathname]){
//         routes[pathname](req, res)
//     }
//     else{
//         routes['/notfound'](req, res)
//     }
// })
// const PORT = 3000;
// server.listen(PORT, () => {
//     console.log(`Server is running at http://localhost:${PORT}`);
// }) 


// 2. Dyanmic Routes
// const server = http.createServer((req, res) => {
//     const {pathname} = url.parse(req.url);
//     if(pathname.startsWith('/user/')){
//         const userId = pathname.split('/')[2];
    //     res.writeHead(200, {'content-type': 'text/plain'});
    //     res.end(`User ID : ${userId}`);
    // }
    // else{
    //     res.writeHead(404, {'content-type': 'text/plain'});
    //     res.end('Route Not Found')
    // }
// })
// const PORT = 3000;
// server.listen(PORT, () => {
//     console.log(`Server is running at http://localhost:${PORT}`);
// }) 


// 3. Middleware function for logging request
// function logRequest(req, res, next){
//     console.log(`${req.method} request made to ${req.url}`);
//     next(req, res);
// }
// const server = http.createServer((req, res) => {
//     logRequest(req, res, (req, res) => {
//         const {pathname} = url.parse(req.url);
//         if(pathname.startsWith('/user/')){
//             const userId = pathname.split('/')[2];
//             res.writeHead(200, {'content-type': 'text/plain'});
//             res.end(`User ID : ${userId}`);
//         }
//         else{
//             res.writeHead(404, {'content-type': 'text/plain'});
//             res.end('Route Not Found');
//         }
//     })
// })
// const PORT = 3000;
// server.listen(PORT, () => {
//     console.log(`Server is running at http://localhost:${PORT}`);
// }) 


// 4. Handling URL-encoded Data
// const queryString = require('querystring');
// const server = http.createServer((req,res) => {
//     if(req.method === 'POST' && req.url === '/submit'){
//         let data = '';
//         req.on('data', (chunk) => {
//             data += chunk;
//         })
//         req.on('end', () => {
//             const parsedData = queryString.parse(data);
//             res.writeHead(200, {'content-type':'application/json'});
//             res.end(JSON.stringify({message: 'Form Data Received', parsedData}));
//         })
//     }
// })
// const PORT = 3000;
// server.listen(PORT, () => {
//     console.log(`Server is running at http://localhost:${PORT}`);
// }) 