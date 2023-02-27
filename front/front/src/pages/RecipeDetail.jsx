import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const RecipeDetail = () => {
  const { recipeId } = useParams();
  const [recipe, setRecipe] = useState();

  const fetchRecipe = async () => {
    const response = await axios.get(
      `http://localhost:5005/api/recipes/${recipeId}`
    );
    setRecipe(response.data);
  };

  useEffect(() => {
    fetchRecipe();
  }, [recipeId]);

const handleDelete = async() => {
  await axios.delete(`http://localhost:5005/api/recipes/${recipeId}`)
}

  return (
    recipe && (
      <>
        <div>RecipeDetail</div>
        <h1>{recipe.title}</h1>
        <p>{recipe.cookingTime}</p>
        <p>{recipe.description}</p>
        <p>{recipe.ingredients}</p>
        <Link
          to={`/recipes/update/${recipe._id}`}
        >
          <button type="button">Update</button>
        </Link>
        <Link to="/recipes">
          <button onClick={handleDelete} type="button">Delete</button>
        </Link>
      </>
    )
  );
};
export default RecipeDetail;
