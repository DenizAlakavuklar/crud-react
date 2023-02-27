import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const AllRecipes = () => {
  const [recipes, setRecipes] = useState([]);

  const fetchRecipes = async () => {
    try {
      const response = await axios.get("http://localhost:5005/api/recipes");
      setRecipes(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchRecipes();
  }, []);

  return (
    recipes && (
      <>
        <div>AllRecipes</div>
        {recipes.map((recipe) => {
          {
            console.log(recipe);
          }
          return (
            <Link to={`/recipes/${recipe._id}`}>
              <div key={recipe._id} style={{border: '1px solid black'}}>
                <h1>{recipe.title}</h1>
                <p>{recipe.cookingTime}</p>
                <p>{recipe.description}</p>
                <p>{recipe.ingredients}</p>
              </div>
            </Link>
          );
        })}
      </>
    )
  );
};
export default AllRecipes;
