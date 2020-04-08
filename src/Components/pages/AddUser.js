import React, { Component } from "react";
import { Form, Col, Button } from "react-bootstrap";
import { firestoreConnect } from "react-redux-firebase";
import history from "../../helpers/history";

export class AddUser extends Component {
	state = {
		firstName: "",
		lastName: "",
		balance: 0,
		email: "",
	};
	handlerSubmit = (event) => {
		event.preventDefault();
		const client = this.state;
		const { firestore } = this.props;
		firestore.add({ collection: "clients" }, client);
		history.push("/home");

	};
	render() {
		return (
			<div className="add-user-div">
				<Form onSubmit={this.handlerSubmit}>
					<Form.Group as={Col}>
						<Form.Control
							onChange={(e) => {
								this.setState({ firstName: e.target.value });
							}}
							type="text"
							placeholder="First Name"
							required
						/>
					</Form.Group>

					<Form.Group as={Col}>
						<Form.Control
							onChange={(e) => {
								this.setState({ lastName: e.target.value });
							}}
							type="text"
							placeholder="Last Name"
							required
						/>
					</Form.Group>

					<Form.Group as={Col} controlId="formGridEmail">
						<Form.Control
							onChange={(e) => {
								this.setState({ email: e.target.value });
							}}
							type="email"
							placeholder="Enter email"
							required
							name="email"
						/>
					</Form.Group>

					<Form.Group as={Col}>
						<Form.Control
							onChange={(e) => {
								this.setState({ balance: parseInt(e.target.value) });
							}}
							type="text"
							placeholder="Balance"
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

export default firestoreConnect()(AddUser);
