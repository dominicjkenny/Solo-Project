export const addRecipe = event => (dispatch) => {
  fetch.post('/recipes', {
   body: ''
  })
    .catch(console.error);
};

export const loadRecipes = () => (dispatch) => {
  fetch.get('/recipes')
    .then((data) => data.json())
    .then((data) => {
      dispatch({
        type: types.LOAD_RECIPES,
        payload: data,
      });
    })
    .catch(console.error);
};