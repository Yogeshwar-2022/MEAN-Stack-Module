const os = require("os");
console.log(os.arch());
console.log(os.hostname());
// console.log(os.cpus());

const freeMeomry = os.freemem();
console.log(freeMeomry);
console.log(`${freeMeomry / 1024 / 1024 / 1024}`);

const totalMeomary = os.totalmem();
console.log(totalMeomary);
console.log(`${totalMeomary / 1024 / 1024 / 1024}`);
