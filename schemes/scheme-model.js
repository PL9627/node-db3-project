const db = require("../data/dataConfig");

module.exports = {
  find,
  findById,
  findSteps,
  add,
  update,
  remove,
};

function find() {
  return db.select("*").from("schemes");
}
