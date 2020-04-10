import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import home_logo from "../Images/home_logo.png";
import { connect } from "react-redux";

class Menu extends Component {
	render() {
		// var user = firebase.auth().currentUser;
		const { isSignedIn } = this.props;
		console.log("user", isSignedIn);

		return (
			<div className="menu">
				<Navbar bg="light" variant="light">
					<Nav variant="tabs" className="mr-auto">
						<NavLink className="nav-link" to="/home">
							<img className="home-logo" alt="logo" src={home_logo} />
						</NavLink>
						{isSignedIn && (
							<>
								<NavLink className="nav-link" to="/add-user">
									Add User
								</NavLink>
								<NavLink className="nav-link" to="/log-out">
									Log Out
								</NavLink>
							</>
						)}
						{!isSignedIn && (
							<>
								<NavLink className="nav-link" to="/sign-in">
									Sign In
								</NavLink>
								<NavLink className="nav-link" to="/sign-up">
									Sign Up
								</NavLink>
							</>
						)}
					</Nav>
				</Navbar>
			</div>
		);
	}
}

export default connect((state) => ({
	isSignedIn: state.mainstore.isSignedIn,
}))(Menu);
