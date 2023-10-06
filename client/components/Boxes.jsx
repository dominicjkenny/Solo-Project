import React from "react";

const Boxes = props => { 
  return (
    <div className="recipeBox">
      <h4 className='blktxt'>
        recipeName
      </h4>
      <p className='blktxt'>
        <label htmlFor='mainLiquor' className='blktxt'>Main Liquor: </label>
        <span id='mainLiquor' className='blktxt'></span>
      </p>
      <button>View</button>
    </div>
  );
};

export default Boxes;