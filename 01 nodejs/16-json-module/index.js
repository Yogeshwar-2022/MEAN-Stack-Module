// const { json } = require("stream/consumers");

const fs = require("fs");
const bioData = {
  name: "Yogeshwar",
  age: "23",
  channel: "techniacla guruji",
};

// json file created by
// 1. convert to json
// 2. add file to another file
// 3. readfile
// 4. agian convert back to js obj ori
// 5. console.log use to terminal output

const jsondata = JSON.stringify(bioData);
fs.writeFile("json1.json", jsondata, (err) => {
  console.log("done");
});

fs.readFile("json1.json", "utf-8", (err, data) => {
  console.log(data);

  const org_data = JSON.parse(data);
  console.log(org_data);
});
