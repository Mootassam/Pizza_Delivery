const express = require("express");
const router = express.Router();
const Pizza = require("../models/pizzaModel");
router.get("/get", async (req, res) => {
  try {
    const pizzas = await Pizza.find({});
    res.send(pizzas);
  } catch (error) {
    return res.status(400).json({ message: error });
  }
});
router.post("/addPizzas", async (req, res) => {
  try {
    const pizza = req.body.pizza;
    const newPizza = new Pizza({
      name: pizza.name,
      image: pizza.image,
      varients: ["small", "medium", "large"],
      description: pizza.description,
      category: pizza.category,
      prices: [pizza.prices],
    });
    await newPizza.save();
    res.send("new pizza added");
  } catch (error) {
    return res.status(400).json({ message: error });
  }
});

module.exports = router;
