// Reducer Start
const recipeState = [];
export const RecipeReducer = (state = recipeState, action) => {
	switch (action.type) {
		case "ADD_RECIPE":
			return [...state, action.recipe];
		case "EDIT_RECIPE":
			return state.map((b)=> {
				if (b.id === action.id) {
					return {
						...b,
						...action.update
					}
				} else {return b}
			})
		case "REMOVE_RECIPE":
			return state.filter(({id})=>{
				return id !== action.id
			})
			case "SET_RECIPES":
				return action.recipes;
		default:
			return state;
	}
};
// Reducer End
