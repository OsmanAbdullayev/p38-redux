import React from "react";
import { connect } from "react-redux";
import RecipeForm from "../../components/RecipeForm";
import { editRecipe } from "../../actions/actionRecipe";

const EditRecipe = (props) => {
	return (
		<div>
			<h1 className="text-center my-3">Edit Recipe</h1>
			<RecipeForm
				editRecipe={props.pvalue}
				onFormSubmit={(a) => {
					props.dispatch(editRecipe(props.pvalue.id, a));
					props.history.push("/admin");
				}}
			/>
		</div>
	);
};

const mapStateToProps = (state, props) => {
	return {
		pvalue: state.RecipeReducer.find((b) => {
			return b.id === props.match.params.id;
		}),
	};
};

export default connect(mapStateToProps)(EditRecipe);
