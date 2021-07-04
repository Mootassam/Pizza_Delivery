const { json } = require("body-parser");
const express = require("express");

const router = express.Router();
const User = require("../models/userModel");
router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  const newUser = await new User({ name, email, password });
  try {
    newUser.save();
    res.send("User Registered succesfully");
  } catch (error) {
    return res.status(400).json({ message: error });
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.find({ email: email, password: password });
    if (User.length > 0) {
      const currentUser = {
        name: user[0].name,
        email: user[0].email,
        isAdmin: user[0].isAdmin,
        _id: user[0]._id,
      };

      res.send(currentUser);
    } else {
      return res.status(400).json({ json: "User login Failed" });
    }
  } catch (error) {
    console.log(error);
  }
});

router.get("/allUser", async (req, res) => {
  try {
    const response = await User.find();
    res.send(response);
  } catch (error) {
    return res.status(400).json({ message: error });
  }
});

router.post("/deleteUser", async (req, res) => {
  const _id = req.body.user_id;

  try {
    await User.findOneAndDelete({ _id: _id });
    res.send({ message: "delete Successfully" });
  } catch (error) {
    res.status(400).send(error);
  }
});

router.post("/editUser", async (req, res) => {
  const id = req.body.user;

  try {
    const user = await User.findOne({ _id: id._id });
    (user.name = id.name),
      (user.email = id.email),
      (user.password = id.password);
    await user.save();
    res.send(user);
  } catch (error) {
    return res.status(400).json({ error: error });
  }
});

router.post("/UserById", async (req, res) => {
  const id = req.body.user_id;

  try {
    const response = await User.findById({ _id: id });
    res.send(response);
  } catch (error) {
    res.status(400).json({ error: error });
  }
});

module.exports = router;
