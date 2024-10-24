const RecipeRouter = require("express").Router();
const RecipeModel = require("../models/Recipe.models");
// to get all the data from the collection
RecipeRouter.get("/", async (req, res) => {
  try {
    const result = await RecipeModel.find();
    return res.status(200).json({
      status: "success",
      message: "Recipe fetched successfully",
      data: result,
    });
  } catch (error) {
    console.log(error.message);
  }
});
// this by get the data by id
RecipeRouter.get("/:recipeById", async (req, res) => {
  try {
    console.log(req.params);
    const result = await RecipeModel.findById(req.params.recipeById);

    if (!result) {
      return res.status(404).json({
        status: "error",
        message: "Recipe not found",
      });
    }
    return res.status(200).json({
      status: "success",
      message: "Recipe  fetched by ID successfully",
      data: result,
    });
  } catch (error) {
    console.log(error.message);
  }
});
// this is the patch where we can update the data
RecipeRouter.patch("/:recipeById", async (req, res) => {
  try {
    console.log(req.params.recipeById);
    const result = await RecipeModel.findByIdAndUpdate(
      req.params.recipeById,
      req.body,
      { new: true }
    );
    return res.status(200).json({
      status: "success",
      message: "Recipe  updated by ID successfully",
      data: result,
    });
  } catch (error) {
    console.log(error.message);
  }
});
// this is for posting new recipes
RecipeRouter.post("/createRecipe", async (req, res) => {
  try {
    const result = await RecipeModel.create(req.body);
    return res.status(200).json({
      status: "success",
      message: "Recipe created successfully",
      data: result,
    });
  } catch (error) {
    console.log(error.message);
  }
});
// to delete a specfic data from the data base
RecipeRouter.delete("/:deleteID", async (req, res) => {
  try {
    const result = await RecipeModel.findByIdAndDelete(req.params.deleteID);
    if (!result) {
      return res.status(404).json({
        status: "error",
        message: "Recipe not found",
      });
    }
    return res.status(200).json({
      status: "success",
      message: "Recipe deleted successfully",
      data: result.name,
    });
  } catch (error) {
    console.log(error.message);
  }
});

module.exports = RecipeRouter;
