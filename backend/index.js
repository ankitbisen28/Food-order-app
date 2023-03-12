const express = require('express');
const app = express()
const PORT = 5000 || process.env.PORT;
const mongoDB = require('./db');
const CreateUser = require("../backend/Routes/CreateUser.js");
const DisplayData = require("../backend/Routes/DisplayData");
const OrderData = require("../backend/Routes/OrderData");
const cors = require('cors')
const dotenv = require('dotenv');

dotenv.config();
mongoDB();
app.use(cors({
  origin: "https://food-order-app-client.onrender.com"
}));

app.get('/', (req, res) => {
  res.send('Hello World!');
})
app.use(express.json());
app.use('/api', CreateUser);
app.use('/api', DisplayData);
app.use('/api', OrderData);

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})
