import React, { Component } from "react";
import { Form, Col, Button } from "react-bootstrap";
import firebase from "firebase/app";
import { firestoreConnect } from "react-redux-firebase";
import history from "../../helpers/history";
import "firebase/auth";
import { compose } from "redux";
import { connect } from "react-redux";

export class SignUp extends Component {
	state = {
		email: "",
		password: "",
		confirmPassword: "",
		firstName: "",
		lastName: "",
		balance: 0,
		errors: {},
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
			.then((response) => {
				const client = {
					firstName: this.state.firstName,
					lastName: this.state.lastName,
					balance: 0,
					email: this.state.email,
				};
				const { firestore } = this.props;
				firestore.add({ collection: "clients" }, client);
				this.props.dispatchSignin("SIGNIN_SUCCESS", response);
				history.push("/home");
			})
			.catch((error) => {
				let errorCode = error.code;
				let errorMessage = error.message;
				this.props.dispatchSignin("SIGNIN_FAILURE", errorMessage);

				if (errorCode === "auth/wrong-password") {
					alert("Wrong password.");
				} else {
					alert(errorMessage);
				}
				console.log(error);
			});
	};
	handleChange = (event) => {
		event.preventDefault();
		const { name, value } = event.target;
		this.setState({ [name]: value });
		const errors = this.state.errors;
		const validEmailRegex = RegExp(
			/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
		);
		switch (name) {
			case "firstName":
				errors.firstName =
					value.length < 2 ? "First Name must be 2 characters long!" : "";
				break;
			case "lastName":
				errors.lastName =
					value.length < 2 ? "Last Name must be 2 characters long!" : "";
				break;
			case "email":
				errors.email = validEmailRegex.test(value) ? "" : "Email is not valid!";
				break;
			case "password":
				errors.password =
					value.length < 7 ? "Password must be 7 characters long!" : "";
				break;
			case "confirmPassword":
				errors.confirmPassword =
					value.length < 7 ? "Password must be 7 characters long!" : "";
				break;
			default:
				break;
		}

		this.setState({ errors, [name]: value });
	};

	signUpWithGoogle = () => {
		const provider = new firebase.auth.GoogleAuthProvider();
		provider.addScope("https://www.googleapis.com/auth/contacts.readonly");
		firebase.auth().useDeviceLanguage();
	};
	render() {
		const { errors } = this.state;
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
						{!!errors.firstName && (
							<span className="error">{errors.firstName}</span>
						)}
					</Form.Group>

					<Form.Group as={Col}>
						<Form.Control
							onChange={this.handleChange}
							type="text"
							placeholder="Last Name"
							required
							name="lastName"
						/>
						{!!errors.lastName && (
							<span className="error">{errors.lastName}</span>
						)}
					</Form.Group>

					<Form.Group as={Col} controlId="formGridEmail">
						<Form.Control
							onChange={this.handleChange}
							type="email"
							placeholder="Enter email"
							required
							name="email"
						/>
						{!!errors.email && <span className="error">{errors.email}</span>}
					</Form.Group>

					<Form.Group as={Col} controlId="formGridPassword1">
						<Form.Control
							onChange={this.handleChange}
							type="password"
							placeholder="Password"
							required
							name="password"
						/>
						{!!errors.password && (
							<span className="error">{errors.password}</span>
						)}
					</Form.Group>
					<Form.Group as={Col} controlId="formGridPassword2">
						<Form.Control
							onChange={this.handleChange}
							type="password"
							placeholder="Confirm Password"
							required
							name="confirmPassword"
						/>
						{!!errors.confirmPassword && (
							<span className="error">{errors.confirmPassword}</span>
						)}
					</Form.Group>

					<Button variant="dark" type="submit">
						Sign Up
					</Button>
					<br />
					<Button variant="info" onClick={this.signUpWithGoogle}>
						Sign In with Google account
					</Button>
				</Form>
				{this.state.showError && (
					<p className="password-error">Passwords do not match</p>
				)}
			</div>
		);
	}
}

export default compose(
	firestoreConnect(),
	connect(
		(state) => ({
			isSignedIn: state.mainstore.isSignedIn,
		}),
		{
			dispatchSignin: (type, data) => (dispatch) => {
				dispatch({ type, data });
			},
		}
	)
)(SignUp);
