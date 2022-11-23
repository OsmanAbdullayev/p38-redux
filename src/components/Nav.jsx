import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink, Link } from "react-router-dom";

function Header() {
	return (
		<Navbar bg="warning" expand="lg">
			<Container fluid>
				<Link to="/" className="navbar-brand fw-bold">
					John Deere
				</Link>
				<Navbar.Toggle aria-controls="navbarScroll" />
				<Navbar.Collapse id="navbarScroll">
					<Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: "100px" }} navbarScroll>
						<NavLink to="/" className="nav-link">
							Home
						</NavLink>
						<NavLink to="/recipes" className="nav-link">
							Recipes
						</NavLink>
					</Nav>
					<Form className="d-flex">
						<Button variant="success">
							<Link className="btn text-white">Dashboard</Link>
						</Button>
					</Form>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default Header;
