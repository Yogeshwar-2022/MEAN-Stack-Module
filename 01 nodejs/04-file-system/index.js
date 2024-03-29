const fs = require("fs");

// creating new file
// fs.writeFileSync("read.txt", "welcome to my channel");

// fs.writeFileSync("read.txt", "hii yogeshwar , welcome to my channel");

// fs.appendFileSync("read.txt", "how are you yogeshwar ? i am fine thank you ");

// const buf_data = fs.readFileSync("read.txt");
// console.log(buf_data); // buffer is mainey used to store binary data
// const org_data = buf_data.toString();
// console.log(org_data);

fs.renameSync("read.txt", "readwrite.txt");
