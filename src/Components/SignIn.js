import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";

export class SignIn extends Component {
	state = {
		email: "",
		password: ""
	};
	handlerSubmit = event => {
		event.preventDefault();
		console.log(this.state);
	};
	render() {
		return (
			<div className="sign-in-div">
				<Form onSubmit={this.handlerSubmit}>
					<Form.Group controlId="formBasicEmail">
						<Form.Label>Email address</Form.Label>
						<Form.Control
							type="email"
							onChange={e => {
								this.setState({ email: e.target.value });
							}}
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
							onChange={e => {
								this.setState({ password: e.target.value });
							}}
							placeholder="Password"
							required
						/>
					</Form.Group>
					<Form.Group controlId="formBasicCheckbox">
						<Form.Check type="checkbox" label="Check me out" />
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
