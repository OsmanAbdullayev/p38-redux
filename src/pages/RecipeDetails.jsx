import React from "react";
import { connect } from "react-redux";
import RecipeDetailsComponent from "../components/RecipeDetailsComponent";
// import { useParams } from "react-router-dom";


const RecipeDetails = (props) => {
  // let { id } = useParams();
  // console.log(id)
 
	return (
		<>
			<h3 className="text-center my-4">Recipe Details</h3>
			<div>
				<RecipeDetailsComponent {...props.pvalue} />
			</div>
		</>
	);
};
const mapStateToProps = (state, props) => {
	return {
		pvalue: state.RecipeReducer.find((q) => {
			return q.id === props.match.params.id;
		}),
	};
};

export default connect(mapStateToProps)(RecipeDetails);
