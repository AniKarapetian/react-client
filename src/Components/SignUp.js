import React, { Component } from "react";
import { Form, Col, Button } from "react-bootstrap";
export class SignUp extends Component {
	state = {
		email: "",
		password: "",
		firstName: "",
		lastName: ""
	};
	handlerSubmit = event => {
		event.preventDefault();
		console.log(this.state);
	};
	render() {
		return (
			<div className="sign-up-div">
				<Form onSubmit={this.handlerSubmit}>
					<Form.Group as={Col}>
						<Form.Control
							onChange={e => {
								this.setState({ firstName: e.target.value });
							}}
							type="text"
							placeholder="First Name"
							required
						/>
					</Form.Group>

					<Form.Group as={Col}>
						<Form.Control
							onChange={e => {
								this.setState({ lastName: e.target.value });
							}}
							type="text"
							placeholder="Last Name"
							required
						/>
					</Form.Group>

					<Form.Group as={Col} controlId="formGridEmail">
						<Form.Control
							onChange={e => {
								this.setState({ email: e.target.value });
							}}
							type="email"
							placeholder="Enter email"
							required
						/>
					</Form.Group>

					<Form.Group as={Col} controlId="formGridPassword">
						<Form.Control
							onChange={e => {
								this.setState({ password: e.target.value });
							}}
							type="password"
							placeholder="Password"
							required
						/>
					</Form.Group>

					<Form.Group as={Col} controlId="formGridPassword">
						<Form.Control
							onChange={e => {
								console.log("password", e.target.value);
							}}
							type="password"
							placeholder="Confirm Password"
							required
						/>
					</Form.Group>
					<Form.Group id="formGridCheckbox">
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

export default SignUp;
