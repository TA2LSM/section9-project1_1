const mongoose = require("mongoose");

const genres = require("./routes/genres");
const customers = require("./routes/customers");
const movies = require("./routes/movies");

const express = require("express");
const app = express();

mongoose
  .connect("mongodb://localhost/vidly")
  .then(() => {
    console.log("Connected to the database...");
  })
  .catch((err) => {
    console.error("Couldn't connect to the database!");
  });

app.use(express.json());
app.use("/api/genres", genres);
app.use("/api/customers", customers);
app.use("/api/movies", movies);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
