/*
// streams are obj that let you read data from a source or write data to a desitinaion

streaming - real time working 

// four types of streams 

readable - stream is used for read operation
Writable -> stream used for write operation
duplex -> used for both read and write
transform -> type of duplex where output is computed based on input 

// each type of stream is an EventEmitter instance and throws several events at different instances of times for example
data -> this event it fired where there is data is available to read
end -> no data avialable to read 
error -> when gettinh some error while writing data 
finish -> all data has been flushed to underlying system 
*/

// handle stream events ->data , end , and error

const fs = require("fs");
const http = require("http");

const server = http.createServer();

server.on("request", (req, res) => {
  // traditional method
  //   fs.readFile("input.txt", (err, data) => {
  //     if (err) return console.error(err);
  //     res.end(data.toString());
  //   });

  // streaming method => data , end , error , finish
  const rStream = fs.createReadStream("input.txt");
  rStream.on("data", (chunkData) => {
    res.write(chunkData);
  });
  rStream.on("end", () => {
    res.end();
  });
  rStream.on("error", () => {
    console.log(err);
    res.end("file not found ");
  });
});

server.listen(8000, "127.0.0.1");
