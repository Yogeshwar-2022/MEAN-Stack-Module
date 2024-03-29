const name = "yogeshwar";
console.log(name);

(function () {
  var a = "yogeshwar";
})();
console.log(a); // a is private so not acess a

// hence the default method to acess any file in module ( module mai se acess karnar hoto ye method mai rehta hai eg require name se )

(function (exports, require, module, __filename, __dirname) {
  const a = require("fs");
  const name = "yogeshwar";
  console.log(name);
  module.exports = { ajjjd };
});
