import { useState } from "react";
import Search from "./components/Search";
import RecipeList from "./components/RecipeList";
import Nav from "./components/Nav";
import "./app.css";
import Container from "./components/Container";
import InnerContainer from "./components/InnerContainer";
import RecipeDetails from "./components/RecipeDetails";

function App() {
  const [recipeData, setRecipeData] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState("");
  return (
    <div className="App">
      <Nav />
      <Search recipeData={recipeData} setRecipeData={setRecipeData} />
      <Container>
        <InnerContainer>
          <RecipeList
            recipeData={recipeData}
            setSelectedRecipe={setSelectedRecipe}
          />
        </InnerContainer>
        <InnerContainer>
          <RecipeDetails selectedRecipe={selectedRecipe} />
        </InnerContainer>
      </Container>
    </div>
  );
}

export default App;
