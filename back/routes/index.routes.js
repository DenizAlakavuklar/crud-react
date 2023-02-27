const RecipeModel = require("../models/User.model");

const router = require("express").Router();

router.get("/", (req, res, next) => {
  res.json("All good in here");
});

//to show all recipes
router.get("/recipes", async (req, res) => {
  try {
    const allRecipes = await RecipeModel.find();
    res.json(allRecipes);
  } catch (error) {
    console.log(error);
  }
});

//to show one recipe
router.get("/recipes/:recipeId", async (req, res) => {
  const { recipeId } = req.params;
  try {
    const recipe = await RecipeModel.findById(recipeId);
    res.json(recipe);
  } catch (error) {
    console.log(error);
  }
});

//to delete the recipe
router.delete("/recipes/:recipeId", async (req, res) => {
  const { recipeId } = req.params;
  try {
    const recipe = await RecipeModel.findByIdAndDelete(recipeId);
    res.json(recipe, { message: "Recipe deleted properly " });
  } catch (error) {
    console.log(error);
  }
});

//create a new recipe
router.post("/recipes", async(req, res) => {
  const newRecipeData = req.body
  try {
    const newRecipe = await RecipeModel.create(newRecipeData)
    res.json(newRecipe)
  } catch (error) {
    console.log(error)
  }
})


//update a recipe
router.put("/recipes/:recipeId", async(req, res) => {
  const { recipeId } = req.params;
  const updateRecipeData = req.body;
console.log(updateRecipeData);
  try {
    const updatedRecipe = await RecipeModel.findByIdAndUpdate( recipeId, updateRecipeData, {new:true} )
    res.json(updatedRecipe)
  } catch (error) {
    console.log(error)
  }
})

module.exports = router;
