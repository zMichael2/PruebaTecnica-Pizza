const express = require("express");
const { listaOrder } = require("../controllers/order.controllers");
const service = require("../controllers/order.controllers");
const orderRouter = express.Router();

const list = async (req, res) => {
  const ordenes = await service.listaOrder();
  res.json(ordenes);
};

const listID = async (req, res) => {
  const { id } = req.params;
  const ordenes = await service.listaOrder();
  let listaConID = ordenes.filter((orden) => orden.id == id);
  res.json(listaConID);
};

orderRouter.get("/orders", list);
orderRouter.get("/orders/:id", listID);

module.exports = orderRouter;
