import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import firebase from "firebase/app";
import "firebase/auth";
import history from "../../helpers/history";

export class SignIn extends Component {
	state = {
		email: "",
		password: "",
	};
	handlerSubmit = (event) => {
		event.preventDefault();
		console.log(this.state);
		firebase
			.auth()
			.signInWithEmailAndPassword(this.state.email, this.state.password)
			.then((response) => {
				console.log(response);
				history.push("/home");
			})
			.catch(function (error) {
				var errorCode = error.code;
				var errorMessage = error.message;
				console.log(errorCode, errorMessage);
			});
	};
	handleChange = (event) => {
		this.setState({ [event.target.name]: event.target.value });
	};
	render() {
		// console.log(this.props);
		return (
			<div className="sign-in-div">
				<Form onSubmit={this.handlerSubmit}>
					<Form.Group controlId="formBasicEmail">
						<Form.Label>Email address</Form.Label>
						<Form.Control
							type="email"
							name="email"
							onChange={this.handleChange}
							placeholder="Enter email"
							required
						/>
						<Form.Text className="text-muted">
							We'll never share your email with anyone else.
						</Form.Text>
					</Form.Group>

					<Form.Group controlId="formBasicPassword">
						<Form.Label>Password</Form.Label>
						<Form.Control
							type="password"
							onChange={this.handleChange}
							name="password"
							placeholder="Password"
							required
						/>
					</Form.Group>

					<Button variant="dark" type="submit">
						Submit
					</Button>
				</Form>
			</div>
		);
	}
}

export default SignIn;

/*// Allow read/write access on all documents to any user signed in to the application
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if request.auth.uid != null;
    }
  }
} */
