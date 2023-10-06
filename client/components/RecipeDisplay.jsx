import React from "react";
import Boxes from "./Boxes.jsx";

const RecipeDisplay = props => {
  const recipeArray = [];

  for (let i = 0; i < 5; i++) {
    recipeArray.push(
      <Boxes 
        id={i} 
        key={'recipe' + i}
      />
    );
  }

  return(
    <div className="displayBox">
      <h3 id='header'>Recipes</h3>
      {recipeArray}
    </div>
  );
}

export default RecipeDisplay;