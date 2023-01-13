const mongoose = require("mongoose");

const databaseURL =
  "mongodb://localhost:27017/FoodDeliverApp?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false";

const mongoDB = () => {
  mongoose.set("strictQuery", false);
  mongoose.connect(databaseURL, () => {
    console.log("Database is connected ");
  });
};


module.exports = mongoDB;