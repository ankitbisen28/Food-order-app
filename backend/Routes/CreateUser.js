const express = require("express");
const User = require("../Models/User.js");
const router = express.Router();
const { body, validationResult } = require("express-validator");

router.post(
  "/createuser",
  body("email", "Email should be xyz@mail.com").isEmail(),
  body("name", "Name should at least 5").isLength({ min: 5 }),
  body("password", "Password should at least 5").isLength({ min: 5 }),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        location: req.body.location,
      });

      res.json({ success: true });
    } catch (error) {
      console.log(error);
      res.json({ success: true });
    }
  }
);

router.post(
  "/loginuser",
  body("email", "Email should be xyz@mail.com").isEmail(),
  body("password", "Password is not matching").isLength({ min: 5 }),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    let email = req.body.email;

    try {
      let user = await User.findOne({ email });
      if (!user) {
        return res
          .status(400)
          .json({ errors: "Try loggin with correct credentials" });
      }

      if (req.body.password !== user.password) {
        return res
          .status(400)
          .json({ errors: "Try loggin with correct credentials" });
      }

      res.json({ success: true });
    } catch (error) {
      console.log(error);
      res.json({ success: true });
    }
  }
);

module.exports = router;
