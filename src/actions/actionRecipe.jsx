// import { v4 as uuid } from "uuid";

// // Action Start
// export const addRecipe = ({ title, desc, img }) => ({
// 	type: "ADD_RECIPE",
// 	recipe: {
// 		id: uuid(),
// 		title: title,
// 		desc: desc,
// 		img: img,
// 	},
// });

// export const editRecipe = (id, update) => ({ type: "EDIT_RECIPE", id, update });
// export const removeRecipe = ({ id }) => ({ type: "REMOVE_RECIPE", id: id });

// // Action End

import database from "../firebase/firebaseConfig";

export const addRecipe = (recipe) => ({
	type: "ADD_RECIPE",
	recipe,
});

export const addRecipeToDatabase = (recipeData = {}) => {
	return (dispatch) => {
		const { title = "", desc = "", img = "" } = recipeData;
		const recipe = { title, desc, img };

		database
			.ref("recipes")
			.push(recipe)
			.then((res) => {
				dispatch(
					addRecipe({
						id: res.key,
						...recipe,
					})
				);
			});
	};
};

export const removeRecipe = (id) => ({
	type: "REMOVE_RECIPE",
	id: id,
});

export const removeRecipeFromDatabase = (id) => {
	return (dispatch) => {
		return database
			.ref(`recipes/${id}`)
			.remove()
			.then(() => {
				dispatch(removeRecipe(id));
			});
	};
};

export const editRecipe = (id, updates) => ({
	type: "EDIT_RECIPE",
	id,
	updates,
});

export const editRecipeFromDatabase = (id, updates) => {
	return (dispatch) => {
		return database
			.ref(`recipes/${id}`)
			.update(updates)
			.then(() => {
				dispatch(editRecipe(id, updates));
			});
	};
};

export const setRecipe = (recipes) => ({
	type: "SET_RECIPES",
	recipes,
});

export const getRecipesFromDatabase = () => {
	return (dispatch) => {
		return database
			.ref("recipes")
			.once("value")
			.then((snapshot) => {
				const recipes = [];

				snapshot.forEach((recipe) => {
					recipes.push({
						id: recipe.key,
						...recipe.val(),
					});
				});

				dispatch(setRecipe(recipes));
			});
	};
};
