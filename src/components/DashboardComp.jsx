import React from "react";
import { Link } from "react-router-dom";

const DashboardComp = ({ title, desc, count, img, id }) => {
	return (
		<tr>
			<th scope="row">{count + 1}</th>
			<td>
				<img src={img} alt={title} width={70} />
			</td>
			<td>{title}</td>
			<td>{desc}</td>
			<td>
				<Link to={`edit/${id}`} className="btn btn-success w-50">
					Edit
				</Link>
			</td>
		</tr>
	);
};

export default DashboardComp;
