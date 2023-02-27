import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const UpdateRecipe = () => {

  const [recipe, setRecipe] = useState();
  const { recipeId } = useParams();

  const fetchRecipe = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5005/api/recipes/${recipeId}`
      );
      setRecipe(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchRecipe();
  }, [recipeId]);

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      const response = await axios.put(
        `http://localhost:5005/api/recipes/${recipeId}`,
        recipe
      );
      console.log("blabla",response);
    } catch (error) {
      console.log(error);
    }
  };

  if (!recipe){
    return <p>loading...</p>
  }
  return (
    <>
      <div>UpdateRecipe</div>
      <form onSubmit={handleSubmit}>
        <label>
          {" "}
          title:
          <input
            type="text"
            value={recipe.title}
            onChange={(event) => setRecipe({...recipe, title: event.target.value})}
          />
        </label>
        <label>
          {" "}
          cooking time:
          <input
            type="number"
            value={recipe.cookingTime}
            onChange={(event) => setRecipe({...recipe,cookingTime: event.target.value})}
          />
        </label>
        <label>
          {" "}
          description:
          <input
            type="text"
            value={recipe.description}
            onChange={(event) => setRecipe({...recipe,description: event.target.value})}
          />
        </label>
        <label>
          {" "}
          ingredients:
          <input
            type="text"
            value={recipe.ingredients}
            onChange={(event) => setRecipe({...recipe,ingredients: event.target.value})}
          />
        </label>
        <button type='submit'>update</button>
      </form>
    </>
  );
};

export default UpdateRecipe;
