import React from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import RecipesContainer from './RecipesContainer.jsx';
import Selected from '../components/Selected.jsx';


const MainContainer = () => {
  const [isOpen, setIsOpen] = useState(false);

  function toggle() {
    setIsOpen((isOpen) => !isOpen);
  }

  return (
    <div className="container">
      <div className="outerBox">
      {isOpen && <Selected />}
      <button onClick={toggle}>Hide/Show</button>
        <RecipesContainer />
      </div>
    </div>
  )
}

export default MainContainer;