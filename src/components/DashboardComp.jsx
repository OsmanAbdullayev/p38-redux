import React from "react";

const DashboardComp = ({ title, desc, count, img }) => {
	return (
		<tr>
			<th scope="row">{count + 1}</th>
			<td>
				<img src={img} alt={title} width={70} />
			</td>
			<td>{title}</td>
			<td>{desc}</td>
			<td>
				<button className="btn btn-success w-50">Edit</button>
			</td>
		</tr>
	);
};



export default DashboardComp;
