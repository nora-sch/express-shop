const express = require('express');
require("dotenv").config();
const app = express();
const port = process.env.PORT;
const seedRouter = require("./routes/seed");

// app.get('/')
app.use("/seed", seedRouter);

app.listen(port, (err) => {
  if (err) {
    console.error('Something bad happened');
  } else {
    console.log(`Server is listening on ${port}`);
  }
});