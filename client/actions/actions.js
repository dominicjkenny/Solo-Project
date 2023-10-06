import axios from 'axios';
import * as types from '../types/actionTypes'

export const addRecipe = event => (dispatch) => {
  fetch.post('/recipes', {
   body: ''
  })
    .catch(console.error);
};

export const loadRecipes = () => (dispatch) => {
  axios.get('http://localhost:3000/recipes')
    .then((data) => data.json())
    .then((data) => {
      dispatch({
        type: types.LOAD_RECIPES,
        payload: data,
      });
    })
    .catch(console.error);
};