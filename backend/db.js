const mongoose = require("mongoose");

const databaseURL =
  "mongodb://localhost:27017/FoodDeliverApp?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false";

const mongoDB = async () => {
  mongoose.set("strictQuery", false);
  mongoose.connect(databaseURL, async (error, result) => {
    if (error) {
      console.log("---", error);
    } else {
      console.log("Database is connected ");
      const fetched_data = await mongoose.connection.db.collection("FoodItem");
      fetched_data.find({}).toArray(async function (err, data) {
        const foodCategory = await mongoose.connection.db.collection("FoodCat");
        foodCategory.find({}).toArray((err, catData) => {
          if (err) console.log(err);
          else {
            global.food_items = data;
            global.foodCategory = catData;
          }
        });
      });
    }
  });
};

module.exports = mongoDB;
