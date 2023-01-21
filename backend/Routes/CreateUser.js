const express = require("express");
const router = express.Router();
const User = require("../Models/User.js");
const { body, validationResult } = require("express-validator");
const bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');

const JWT_SECRET = "helloworld";

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

    const salt = await bcrypt.genSalt(10);
    const secPass = await bcrypt.hash(req.body.password, salt);

    try {
      const user = User.create({
        name: req.body.name,
        email: req.body.email,
        password: secPass,
        location: req.body.location,
      });

      const data = {
        user: {
          id: user.id
        }
      }
      const authtoken = jwt.sign(data, JWT_SECRET);

      res.json({ success: true, authtoken });
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

      const passwordCompare = await bcrypt.compare(req.body.password, user.password);

      if (!passwordCompare) {
        return res
          .status(400)
          .json({ errors: "Try loggin with correct credentials" });
      }

      const data = {
        user: {
          id: user.id
        }
      }
      const authtoken = jwt.sign(data, JWT_SECRET);

      res.json({ success: true, authtoken });
    } catch (error) {
      console.log(error);
      res.json({ success: true });
    }
  }
);

module.exports = router;
