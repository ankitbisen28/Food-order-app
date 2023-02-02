const express = require("express");
const app = express();
const PORT = 5000 || process.env.PORT;
const mongoDB = require("./db");
const CreateUser = require("../backend/Routes/CreateUser.js");
const DisplayData = require("../backend/Routes/DisplayData");
const OrderData = require("../backend/Routes/OrderData");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();
mongoDB();
app.use(cors());

if (process.env.NODE_ENV === "production") {
  //*Set static folder up in production
  app.use(express.static("../client/build"));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "../client", "build", "index.html"))
  );
}

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.use(express.json());
app.use("/api", CreateUser);
app.use("/api", DisplayData);
app.use("/api", OrderData);

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
