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

module.exports = router;
