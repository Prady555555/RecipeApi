const mongoose = require("mongoose");

const dataBase = process.env.MONGODB_URI;

async function connect() {
  try {
    await mongoose.connect(dataBase);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB", error);
  }
}
module.exports = connect;
