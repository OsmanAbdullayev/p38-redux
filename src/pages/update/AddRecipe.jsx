import React from "react";
import { addRecipe } from "../../actions/actionRecipe";
import { connect } from "react-redux";
import RecipeForm from "../../components/RecipeForm";

const AddRecipe = (props) => {
	return (
		<div>
			<h1 className="text-center my-3">Add Recipe</h1>
			<RecipeForm
				onFormSubmit={(fd) => {
					props.dispatch(addRecipe(fd));
					props.history.push("/admin");
				}}
			/>
		</div>
	);
};

export default connect()(AddRecipe);
