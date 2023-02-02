const mongoose = require("mongoose");


const mongoDB = async () => {
  mongoose.set("strictQuery", false);
  mongoose.connect(process.env.databaseURL, async (error, result) => {
    if (error) {
      console.log("---", error);
    } else {
      console.log("Database is connected ");
    }
  });
};

module.exports = mongoDB;
