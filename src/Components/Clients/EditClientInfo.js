import React, { Component } from "react";
import { Form, Col, Button, Modal } from "react-bootstrap";

export class EditClientInfo extends Component {
	constructor(props) {
		super(props);
		this.state = props.user;
	}
	handleSave = () => {
		this.props.onEdit(this.state);
	};
	handleChange = (event) => {
		this.setState({ [event.target.name]: event.target.value });
	};
	render() {
		const { firstName, lastName, email, balance } = this.state;
		return (
			<>
				<Modal show={true} onHide={this.props.onClose} animation={false}>
					<Modal.Header closeButton>
						<Modal.Title>Edit Info</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<Form>
							<Form.Group as={Col}>
								<Form.Control
									onChange={this.handleChange}
									value={firstName}
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
									value={lastName}
									placeholder="Last Name"
									required
									name="lastName"
								/>
							</Form.Group>

							<Form.Group as={Col} controlId="formGridEmail">
								<Form.Control
									onChange={this.handleChange}
									type="email"
									value={email}
									placeholder="Enter email"
									required
									name="email"
								/>
							</Form.Group>

							<Form.Group as={Col}>
								<Form.Control
									onChange={this.handleChange}
									value={balance}
									type="text"
									placeholder="Balance"
									required
									name="balance"
								/>
							</Form.Group>
						</Form>
					</Modal.Body>
					<Modal.Footer>
						<Button variant="primary" type="submit" onClick={this.handleSave}>
							Save
						</Button>
						<Button variant="secondary" onClick={this.props.onClose}>
							Cancel
						</Button>
					</Modal.Footer>
				</Modal>
			</>
		);
	}
}

export default EditClientInfo;
