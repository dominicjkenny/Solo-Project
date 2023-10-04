import { createStore } from "redux";
import reducers from './reducers/index';
import { loadRecipes } from './actions/actions';

const store = createStore(
  reducers
);

// store.dispatch(loadRecipes());

export default store;