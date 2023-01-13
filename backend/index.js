const express = require('express');
const app = express()
const port = 5000
const mongoDB = require('./db');
const CreateUser = require("../backend/Routes/CreateUser.js");
const cors = require('cors')

mongoDB();
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!');
})
app.use(express.json());
app.use('/api', CreateUser);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
