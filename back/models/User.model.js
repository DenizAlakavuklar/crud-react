const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the User model to whatever makes sense in this case
const recipeSchema = new Schema(
  {
   title: String,
   cookingTime: Number,
   description: String,
   ingredients: String,
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`    
    timestamps: true
  }
);

const RecipeModel = model("Recipe", recipeSchema);

module.exports = RecipeModel;
