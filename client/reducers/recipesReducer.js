import * as types from '../types/actionTypes';

const initialState = {
  recipeList: []
};

const recipesReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_RECIPE:
      return {
        ...state,
      };

      case types.LOAD_RECIPES:
        return {
          ...state,
          totalRecipes: action.payload.length,
          recipeList: action.payload,
        };

    default:
      return state;
  }
};

export default recipesReducer;