const EXPRESS = require("express");
const RecipeRouter = require("./controllers/Recipe.controller");

require("dotenv").config();

const API_SERVER = EXPRESS();
const connect = require("./db/db");

connect();

API_SERVER.use(EXPRESS.json());

API_SERVER.use("/recipe", RecipeRouter);
API_SERVER.get("/", function (req, res) {
  return res.status(200).json({
    status: "good",
    message: "WELCOME TO RECIEPE API",
  });
});

API_SERVER.listen(process.env.PORT, process.env.HOSTNAME, function () {
  console.log(
    `Server started on port ${process.env.PORT} and host ${process.env.HOSTNAME}`
  );
});
