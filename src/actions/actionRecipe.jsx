import { v4 as uuid } from "uuid";

// Action Start
export const addRecipe = ({ title, desc, img }) => ({
	type: "ADD_RECIPE",
	recipe: {
		id: uuid(),
		title: title,
		desc: desc,
		img: img,
	},
});

export const editRecipe = (id, update) => ({ type: "EDIT_RECIPE", id, update });
export const removeRecipe = ({ id }) => ({ type: "REMOVE_RECIPE", id: id });

// Action End
