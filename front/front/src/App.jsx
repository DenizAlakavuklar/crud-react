import "./App.css";
import { Route, Routes } from "react-router-dom";
import AllRecipes from "./pages/AllRecipes";
import RecipeDetail from './pages/RecipeDetail';
import NewRecipe from './pages/NewRecipe';
import UpdateRecipe from "./pages/UpdateRecipe";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/recipes' element={<AllRecipes/>} />
        <Route path='/recipes/:recipeId' element={<RecipeDetail/>} />
        <Route path='/recipes/update/:recipeId' element={<UpdateRecipe/>} />
        <Route path='/recipes/newRecipe' element={<NewRecipe/>} />
        <Route path='*' element={<h1>404 not found</h1>} />
      </Routes>
    </div>
  );
}

export default App;
