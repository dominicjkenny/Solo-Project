import React from "react";

const RecipeCreator = props => {
  return (
    <div>
      <h3 id='header'>Add New Recipe</h3>    
      <form>
        <label>
          Name of Cocktail: 
          <input
            name="nameOfCocktail"
            type="text" />
        </label>
        <br></br>
        <label>
          Tools Needed: 
          <input
            name="tools"
            type="text" />
        </label>
        <br></br>
        <label>
          Method of Dilution:
          <input
            name="dilution"
            type="text" />
        </label>
        <br></br>
        <label>
          Strainer:
          <input
            name="strainer"
            type="text" />
        </label>
        <br></br>
        <label>
          Type of Ice:
          <input
            name="ice"
            type="text" />
        </label>
        <br></br>
        <label>
          Garnish:
          <input
            name="garnish"
            type="text" />
        </label>
        <br></br>
        <label>
          Ingredients:
          <br></br>
          <input
            name="ingredient1"
            type="text" />
          <br></br>
          <input
            name="ingredient2"
            type="text" />
          <br></br>
          <input
            name="ingredient3"
            type="text" />
          <br></br>
          <input
            name="ingredient4"
            type="text" />
          <br></br>
          <input
            name="ingredient5"
            type="text" />
          <br></br>
        </label>
        <br></br>
        <button type="submit">Add to Recipe Box</button>
      </form>
    </div>
  )
}

export default RecipeCreator;
