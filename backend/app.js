const express = require('express');
const bodyParser = require('body-parser');
const bajajRouter = require('./routes/bajaj.js');
const dotenv = require('dotenv');
const cors = require('cors');
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;


app.use(
  cors({
    origin: [
      process.env.ORIGIN_1,
      process.env.ORIGIN_2,
    ],
    credentials: true,
  })
);


app.use(bodyParser.json());

app.use('/bfhl', bajajRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;