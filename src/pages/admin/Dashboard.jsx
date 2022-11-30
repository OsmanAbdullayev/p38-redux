import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import DashboardComp from "../../components/DashboardComp";

const Dashboard = (props) => {
	return (
		<div className="col-12">
      <h1 className="text-center my-3">List of Dishes</h1>
			<table className="table">
				<thead>
					<tr>
						<th scope="col">#</th>
						<th scope="col">Image</th>
						<th scope="col">Title</th>
						<th scope="col">Description</th>
						<th scope="col">Action</th>
					</tr>
				</thead>
				<tbody>
        {props.pvalue.map((fd, i) => {
          return <DashboardComp count={i} key={i} {...fd} />;
        })}
        
        <tr>
          <th></th>
          <td></td>
          <td></td>
          <td></td>
          <td>
          <Link to="/add" className="btn btn-primary w-75 text-center ">Add Item</Link>
          </td>
        </tr>
				</tbody>
			</table>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		pvalue: state.RecipeReducer,
	};
};

export default connect (mapStateToProps)(Dashboard);
