const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const cors = require("cors");
const express = require("express");
const movieRoutes = require("./routes/moviesroutes");

const app = require("./app");

//console.log(app.get("env"));

app.use(express.json());
//console.log(process.env);

app.use(cors());
app.use("/movies", movieRoutes);
// connect the database with express js application //
mongoose
  .connect(process.env.CONN_STR, {
    useNewUrlParser: true,
  })
  .then((conn) => {
    console.log(conn);
    console.log("db connection succesfull");
  })
  .catch((error) => {
    console.log("some error has occured");
  });

//create a server
const port = process.env.PORT;
app.listen(port, () => {
  console.log("server started");
});
