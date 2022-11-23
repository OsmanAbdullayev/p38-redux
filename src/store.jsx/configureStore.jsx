import { createStore, combineReducers } from "redux";
import { RecipeReducer } from "../reducers/reducerRecipe";
// Store Start
export default () => {
	const store = createStore(combineReducers({
    RecipeReducer: RecipeReducer

  }));
	return store;
};
// Store End
