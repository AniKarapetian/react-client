import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import home_logo from "../Images/home_logo.png";
class Menu extends Component {
	render() {
		return (
			<>
				<Navbar bg="light" variant="light">
					<Navbar.Brand href="/home">
						<img className="home-logo" src={home_logo} />
					</Navbar.Brand>
					<Nav variant="tabs" className="mr-auto">
						<Nav.Link href="/add-user">Add User</Nav.Link>
						<Nav.Link href="/sign-in">Sign In</Nav.Link>
						<Nav.Link href="/sign-up">Sign Up</Nav.Link>
					</Nav>
				</Navbar>
			</>
		);
	}
}

export default Menu;
