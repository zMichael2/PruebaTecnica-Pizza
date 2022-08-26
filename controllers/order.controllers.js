const bd = require("../database/bd");

const listaOrder = () => {
  return bd("orden_item").select("*");
};

module.exports = { listaOrder };
