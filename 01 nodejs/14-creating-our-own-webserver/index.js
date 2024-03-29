// what is webserver
// web server is to handle all the https request for web appliction
// eg apache web server in php or java web application

//how to create server
/*
http.createserver() method includes request and response parameter which is supplied by nodejs
the request object can be used to get info about cuurrent http http.request
eg url , request header , and Data 

the response object can be used to send a response for a current 

if the response from http server is supposed to be display you shoul include an http header with correct content t
*/

const http = require("http");

const server = http.createServer((req, res) => {
  res.end("hello from the other side, yogeshwar ji");
});

server.listen(8000, "127.0.0.1", () =>
  console.log("listening to the port no 8000")
);
