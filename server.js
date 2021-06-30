const express = require("express");
const app = express();
const db = require("./db");
const Pizza = require("./models/pizzaModel");
const pizzasRoute = require("./routes/pizzaRoute");
const userRoute = require("./routes/userRoute");
app.use(express.json());
const port = 8080;
const cors = require("cors");
app.use(cors());
app.get("/", (req, res) => res.send("Hello World!"));
app.use("/api/pizzas/", pizzasRoute);
app.use("/api/users/", userRoute);
app.listen(port, () =>
  console.log(`Example app listening on port port!`, port)
);
