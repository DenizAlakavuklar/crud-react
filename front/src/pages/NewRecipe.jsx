
import React from 'react'
import axios from "axios";
import { useState } from "react";




const NewRecipe = () => {

    const [title, setTitle] = useState("");
    const [cookingTime, setCookingTime] = useState(0);
    const [description, setDescription] = useState("");
    const [ingredients, setIngredients] = useState("");
    
    const handleSubmit = (event) => {

          event.preventDefault();

          const newRecipe = {
              "title": title,
              "cookingTime": cookingTime,
              "description": description,
              "ingredients": ingredients,
          }

          axios.post(`http://localhost:5005/api/recipes/`, newRecipe)
              .then((res) => {
                  console.log(res.data);
              })
              .catch((err) => {
                  console.log("Error creating beer to API", err);
              })

              setTitle("");
              setCookingTime("");
              setDescription("");
              setIngredients("");
           }


  return (
    <>
    <div>NewRecipe</div>

    <form onSubmit={handleSubmit}>
    <label>
    
      title:
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
    </label>
    <label>
   
      cooking time:
      <input
        type="number"
        value={cookingTime}
        onChange={(e) => setCookingTime(e.target.value)}
      />
    </label>
    <label>
    
      description:
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
    </label>
    <label>
    
      ingredients:
      <input
        type="text"
        value={ingredients}
        onChange={(e) => setIngredients(e.target.value)}
      />
    </label>
    <button type='submit'>Create</button>
  </form>
</>
);
};

export default NewRecipe