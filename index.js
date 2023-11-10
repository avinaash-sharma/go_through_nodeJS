// const Person = require('./person');
// import Person from './person'; <---- this doesn't work in case of nodejs

// const person1 = new Person('John', 30);

// console.log(person1.name);


const http = require('http');
const path = require('path');
const fs = require('fs');
const os = require('os');

const server = http.createServer((req, res) => {
    console.log(req.url);
    // if (req.url == '/') {
    //     fs.readFile(path.join(__dirname, 'public', 'index.html'), (error, data) => {
    //         res.writeHead(200, { 'Content-Type': 'text/html' })
    //         res.end(data);
    //     })
    // }else if(req.url == '/about'){
    //     fs.readFile(path.join(__dirname, 'public', 'about.html'), (error, data) => {
    //         res.writeHead(200, { 'Content-Type': 'text/html' })
    //         res.end(data);
    //     })
    // }else if(req.url === '/api/users'){
    //     const users = [{name: 'John', email: 'john@example.com'}, {name: 'Jane', email: 'jane@example.com'}];
    //     res.writeHead(200, { 'Content-Type': 'application/json' });
    //     res.end(JSON.stringify(users));
    // }

    //what if we need to have css and images as well? well let's make the path dynamic.

    let filePath = path.join(__dirname, 'public', req.url === '/' ? 'index.html' : req.url);

    //extendion of file
    let extName = path.extname(filePath);

    //initial content type
    let contentType = 'text/html';

    switch (extName) {
        case ".js":
          contentType = "text/javascript";
          break;
        case ".css":
          contentType = "text/css";
          break;
        case ".json":
          contentType = "application/json";
          break;
        case ".png":
          contentType = "image/png";
          break;
        case ".jpg":
          contentType = "image/jpg";
          break;
      }
    

    //read file
    fs.readFile(filePath, (err, content) => {
        if (err) {
          if (err.code == "ENOENT") {
            // Page not found
            fs.readFile(
              path.join(__dirname, "public", "404.html"),
              (err, content) => {
                res.writeHead(404, { "Content-Type": "text/html" });
                res.end(content, "utf8");
              }
            );
          } else {
            //  Some server error
            res.writeHead(500);
            res.end(`Server Error: ${err.code}`);
          }
        } else {
          // Success
          res.writeHead(200, { "Content-Type": contentType });
          res.end(content, "utf8");
        }
      });
    });

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});