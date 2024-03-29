// handle http request in nodejs

const http = require("http");
const server = http.createServer((req, res) => {
  //   console.log(req.url);
  if (req.url === "/") {
    res.end("hello form home side yogeshwar ji ");
  } else if (req.url === "/about") {
    res.end("hello form about side yogeshwar ji ");
  } else if (req.url === "/contact") {
    res.end("hello form contact side yogeshwar ji ");
  } else {
    res.writeHead(404, { "content-type": "text/html" });
    res.end("<h1s>sorry 404 error page , page doesont exit</h1> ");
  }
});

server.listen(8000, "127.0.0.1", () => {
  console.log("listening to the port no 8000");
});
