import React from "react";
import { connect } from "react-redux";
import RecipeCard from "../components/RecipeCard";
import Row from "react-bootstrap/Row";

const Recipes = (props) => {
	return (
		<Row className="my-4 g-4">
			{props.pvalue.map((fd, i) => {
				return <RecipeCard key={i} {...fd} />;
			})}
		</Row>
	);
};

const mapStateToProps = (state) => {
	return {
		pvalue: state.RecipeReducer,
	};
};

export default connect(mapStateToProps)(Recipes);
