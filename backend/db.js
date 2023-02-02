const mongoose = require("mongoose");

const databaseURL =
  "mongodb+srv://ankitbisen28:AnkitBisen%40123@cluster0.8xv1zrv.mongodb.net/?retryWrites=true&w=majority";

const mongoDB = async () => {
  mongoose.set("strictQuery", false);
  mongoose.connect(databaseURL, async (error, result) => {
    if (error) {
      console.log("---", error);
    } else {
      console.log("Database is connected ");
    }
  });
};

module.exports = mongoDB;
