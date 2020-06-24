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
  return db("schemes");
}

function findById(id) {
  return db("schemes").where({ id }).first();
}

function findSteps(id) {
  return db("steps as s")
    .join("schemes as sch", "sch.id", "s.scheme_id")
    .where("sch.id", id)
    .select("s.id", "sch.scheme_name", "s.step_number", "s.instructions")
    .orderBy("s.step_number", "asc");
}

function add(scheme) {
  return db("schemes")
    .insert(scheme)
    .then(([id]) => {
      findById(id);
    });
}

function update(changes, id) {

}

function remove(id) {
    
}
