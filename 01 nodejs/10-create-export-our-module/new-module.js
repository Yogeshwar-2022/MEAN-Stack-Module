const add = (a, b) => {
  return a + b;
};

const sub = (a, b) => {
  return a - b;
};
const name = "Yogeshwar";

// module.exports.name = name;
// module.exports.add = add;
// module.exports.sub = sub;
// another best method is

module.exports = { name, add, sub };
