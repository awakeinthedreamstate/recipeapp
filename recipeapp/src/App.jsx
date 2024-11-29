import { useState } from "react";
import Search from "./components/Search";
import RecipeList from "./components/RecipeList";

function App() {
  const [recipeData, setRecipeData] = useState([]);
  return (
    <div className="App">
      <Search recipeData={recipeData} setRecipeData={setRecipeData} />
      <RecipeList recipeData={recipeData} />
      {/* {recipeData.map((recipe) => (
        <div key={recipe.id}>
          <h1>{recipe.title}</h1>
          <img src={recipe.image} />
        </div>
      ))} */}
    </div>
  );
}

export default App;
