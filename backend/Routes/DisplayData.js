const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

router.post("/foodData", async (req, res) => {
  try {
    const fetched_data = await mongoose.connection.db.collection("FoodItem");
    // console.log(fetched_data);
    fetched_data.find({}).toArray(async function (err, data) {
      const foodCategory = await mongoose.connection.db.collection("FoodCat");
      foodCategory.find({}).toArray((err, catData) => {
        if (err) console.log(err);
        else {
          let food_items = data;
          let foodCategory = catData;
          res.send([food_items, foodCategory]);
        }
      });
    });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
