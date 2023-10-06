import React from "react";
import RecipeCreator from '../components/RecipeCreator.jsx';
import RecipeDisplay from '../components/RecipeDisplay.jsx';

const RecipesContainer = () => {
  return (
    <div className="innerbox">
      <RecipeCreator />
      <RecipeDisplay />
    </div>
  )
}


export default RecipesContainer;