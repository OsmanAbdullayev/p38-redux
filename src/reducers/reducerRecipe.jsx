// Reducer Start
const recipeState = [];
export const RecipeReducer = (state = recipeState, action) => {
	switch (action.type) {
		case "ADD_RECIPE":
			return [...state, action.recipe];
		case "REMOVE_RECIPE":
		case "UPDATE_RECIPE":
		default:
			return state;
	}
};
// Reducer End
