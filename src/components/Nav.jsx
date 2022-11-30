import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink, Link } from "react-router-dom";

function Header() {
	return (
		<Navbar bg="warning" expand="lg" className="shadow">	
			<Container fluid>
				<Link to="/" className="navbar-brand fw-bold fs-3 text-danger">
					BOOM!
				</Link>
				<Navbar.Toggle aria-controls="navbarScroll" />
				<Navbar.Collapse id="navbarScroll">
					<Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: "100px" }} navbarScroll>
						<NavLink to="/" className="nav-link fw-bold" exact={true}>
							Home
						</NavLink>
						<NavLink to="/recipes" className="nav-link fw-bold">
							Recipes
						</NavLink>
					</Nav>
					<Form className="d-flex">
							<Link to="/admin" className="btn text-white"><Button variant="success">Dashboard</Button></Link>
						
					</Form>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default Header;
