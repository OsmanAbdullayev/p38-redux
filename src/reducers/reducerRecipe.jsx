// Reducer Start
const recipeState = [];
export const RecipeReducer = (state = recipeState, action) => {
	switch (action.type) {
		case "ADD_RECIPE":
			return [...state, action.recipe];
		case "REMOVE_RECIPE":
		case "EDIT_RECIPE":
			return state.map((b)=> {
				if (b.id === action.id) {
					return {
						...b,
						...action.update
					}
				} else {return b}
			})
		default:
			return state;
	}
};
// Reducer End
