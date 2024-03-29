// // crud operation on "fs " using nodejs

// // challlenges
// // 1: create a folder named it yogeshwar
// // 2: create file in it named Bio.txt and data into it.
// // 3: add more data into the file at the end of existing data.
// // 4: read the data without getting the buffer data at First
// // 5: rename the file name to mybio.txt
// // 6: now delete both the file and the folder

const fs = require("fs");
fs.writeFileSync("bio.txt", "hii my name is yogeshwar!");

// fs.appendFileSync(
//   "bio.txt",
//   ", i am currently pursuing bachelor degree in cs feild"
// );

// const buf_data = fs.readFileSync("bio.txt");
// const org_data = buf_data.toString();
// console.log(org_data);

// fs.renameSync("bio.txt", "mybio.txt");

fs.unlinkSync("mybio.txt");
