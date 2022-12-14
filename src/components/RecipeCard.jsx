import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col"
import {Link} from 'react-router-dom'

const RecipeCard = ({title, desc, img, id}) => {
	return (
		<Col xs={12} md={6} lg={3}>
			<Card className="h-100">
				<Card.Img variant="top" className="h-75" src={img} alt={title} />
				<Card.Body >
					<Card.Title>{title}</Card.Title>
					<Card.Text>
						{`${desc.substring(0, 30)}...`}
					</Card.Text>
					<Link className="btn text-white" to={`/recipes/${id}`}><Button variant="success"> Details</Button></Link>
				</Card.Body>
			</Card>
		</Col>
	);
};

export default RecipeCard;
