const mongoose = require("mongoose");

const RecipeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  ingredients: {
    type: [String],
    required: true,
  },

  image: {
    type: String,
  },
});

const recipeModel = mongoose.model("recipe", RecipeSchema);

module.exports = recipeModel;
