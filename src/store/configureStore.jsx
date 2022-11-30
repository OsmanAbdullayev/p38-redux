// import { createStore, combineReducers } from "redux";
// import { RecipeReducer } from "../reducers/reducerRecipe";
// // Store Start
// export default () => {
// 	const store = createStore(combineReducers({
//     RecipeReducer: RecipeReducer

//   }));
// 	return store;
// };
// // Store End


import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { RecipeReducer } from "../reducers/reducerRecipe";
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = () => {
    const store = createStore(
        combineReducers({
            RecipeReducer: RecipeReducer
        }),
        // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        composeEnhancers(applyMiddleware(thunk))
    );
    return store;
}
export default configureStore;