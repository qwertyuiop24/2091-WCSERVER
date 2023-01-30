//Lab 3
//Layson, Aron E.
//WD - 201

var http = require('http');

var server = http.createServer(function (req, res) {
  if (req.url == '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(
      '<html><h1 style= "border: 1px solid Teal; background-color: skyblue;">This is Home Page.</h1><body><p> Welcome! Aron E. Layson This is an activity about basic of Node.js </p></body></html>'
    );
    res.end();
  } else if (req.url == '/about') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(
      '<html><h1 style ="border:1px solid Teal;">This is The Student Page.</h1><p><body>I am Aron Layson a 2nd Year Student Majoring in Web Development.</p></body></html>'
    );
    res.end();
  } else if (req.url == '/contact') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(
      '<html><h1>This is the Contact Page.</h1><p><body>You can contact me at my Github Account: https://github.com/qwertyuiop24</p></body></html>'
    );
    res.end();
  } else if (req.url == '/gallery') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<html><body><p>This is The Student Page.</p></body></html>');
  } else if (req.url == '/admin') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<html><body><p>This is The Student Page.</p></body></html>');
  } else res.end('Invalid Request!');
});

server.listen(5000);
console.log('Node.js web server is at port 5000 is running..');
