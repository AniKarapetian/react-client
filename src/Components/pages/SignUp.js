import React, { Component } from "react";
import { Form, Col, Button } from "react-bootstrap";
import firebase from "firebase/app";
import { firestoreConnect } from "react-redux-firebase";
import history from "../../helpers/history";
import "firebase/auth";

export class SignUp extends Component {
	state = {
		email: "",
		password: "",
		confirmPassword: "",
		firstName: "",
		lastName: "",
		balance: 0,
	};
	handlerSubmit = (event) => {
		event.preventDefault();
		const { password, confirmPassword } = this.state;
		if (password !== confirmPassword) {
			console.log(false);
			this.setState({ showError: true });
			return;
		}
		firebase
			.auth()
			.createUserWithEmailAndPassword(this.state.email, this.state.password)
			.then(() => {
				const client = {
					firstName: this.state.firstName,
					lastName: this.state.lastName,
					balance: 0,
					email: this.state.email,
				};
				const { firestore } = this.props;
				firestore.add({ collection: "clients" }, client);
				history.push("/home");
			})
			.catch(function (error) {
				let errorCode = error.code;
				let errorMessage = error.message;
				if (errorCode === "auth/wrong-password") {
					alert("Wrong password.");
				} else {
					alert(errorMessage);
				}
				console.log(error);
			});
	};
	handleChange = (event) => {
		this.setState({ [event.target.name]: event.target.value });
	};
	render() {
		return (
			<div className="sign-up-div">
				<Form onSubmit={this.handlerSubmit}>
					<Form.Group as={Col}>
						<Form.Control
							onChange={this.handleChange}
							type="text"
							placeholder="First Name"
							required
							name="firstName"
						/>
					</Form.Group>

					<Form.Group as={Col}>
						<Form.Control
							onChange={this.handleChange}
							type="text"
							placeholder="Last Name"
							required
							name="lastName"
						/>
					</Form.Group>

					<Form.Group as={Col} controlId="formGridEmail">
						<Form.Control
							onChange={this.handleChange}
							type="email"
							placeholder="Enter email"
							required
							name="email"
						/>
					</Form.Group>

					<Form.Group as={Col} controlId="formGridPassword1">
						<Form.Control
							onChange={this.handleChange}
							type="password"
							placeholder="Password"
							required
							name="password"
						/>
					</Form.Group>

					<Form.Group as={Col} controlId="formGridPassword2">
						<Form.Control
							onChange={this.handleChange}
							type="password"
							placeholder="Confirm Password"
							required
							name="confirmPassword"
						/>
					</Form.Group>

					<Button variant="dark" type="submit">
						Submit
					</Button>
				</Form>
				{this.state.showError && (
					<p className="password-error">Passwords do not match</p>
				)}
			</div>
		);
	}
}

export default firestoreConnect()(SignUp);
