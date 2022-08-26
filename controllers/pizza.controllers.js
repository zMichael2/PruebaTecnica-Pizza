const bd = require("../database/bd");

const listaPizza = () => {
  return bd("pizza").select("*");
};

module.exports = { listaPizza };
