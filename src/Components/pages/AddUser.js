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
	handleChange = (event) => {
		this.setState({ [event.target.name]: event.target.value });
	};
	render() {
		return (
			<div className="add-user-div">
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

					<Form.Group as={Col}>
						<Form.Control
							onChange={this.handleChange}
							type="text"
							placeholder="Balance"
							required
							name="balance"
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
