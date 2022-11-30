import React from "react";
import { connect } from "react-redux";
import RecipeForm from "../../components/RecipeForm";
import { editRecipeFromDatabase, removeRecipeFromDatabase } from "../../actions/actionRecipe";

const EditRecipe = (props) => {
	return (
		<div>
			<h1 className="text-center my-3">Edit Recipe</h1>
			<RecipeForm
				editRecipe={props.pvalue}
				onFormSubmit={(a) => {
					props.dispatch(editRecipeFromDatabase(props.pvalue.id, a));
					props.history.push("/admin");
				}}
			/>
			<div className="d-flex flex-column justify-content-center align-items-center">
				<div className="col-6">
					<button
						className="btn btn-danger text-center mt-1"
						onClick={() => {
							props.dispatch(removeRecipeFromDatabase(props.pvalue.id));
							props.history.push("/admin");
						}}>
						Delete
					</button>
				</div>
			</div>
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
