const mongoose = require("mongoose");

const dataBase = "mongodb://localhost:27017/Recipe";

async function connect() {
  try {
    await mongoose.connect(dataBase);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB", error);
  }
}
module.exports = connect;
