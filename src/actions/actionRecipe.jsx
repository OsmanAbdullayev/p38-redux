import { v4 as uuid } from "uuid";

// Action Start
export const addRecipe = ({ title, desc, img}) => ({
	type: "ADD_RECIPE",
	recipe: {
		id: uuid(),
		title: title,
		desc: desc,
    img: img
	},
});

// Action End
