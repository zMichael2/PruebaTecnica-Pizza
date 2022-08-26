const express = require("express");
const pizzaRouter = express.Router();
const service = require("../controllers/pizza.controllers");

const list = async (req, res) => {
  const pizzas = await service.listaPizza();
  const listapizza = [];
  pizzas.forEach((pizza) => {
    const obj = {
      Nombre: pizza.nombre,
      Precio: pizza.precio,
      Ingredientes: pizza.ingrediente_id.split(", "),
    };
    listapizza.push(obj);
  });

  res.json({ Lista_pizza: listapizza });
};

pizzaRouter.get("/pizzas", list);

module.exports = pizzaRouter;
