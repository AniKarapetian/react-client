import React from "react";
import { Button, Card, Modal } from "react-bootstrap";
import profileIcon from "../../Images/user_photo.png";

function ClientInfo(props) {
	const { email, balance, firstName, lastName } = props.client;
	return (
		<>
			<Modal show={true} onHide={props.onClose}>
				<Modal.Header closeButton>
					<Modal.Title>User Info</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Card style={{ width: "18rem", margin: "auto" }}>
						<Card.Img variant="top" src={profileIcon} />
						<Card.Body>
							<Card.Title>{firstName + " " + lastName}</Card.Title>
							<Card.Text>Email: {email}</Card.Text>
							<Card.Text>Balance: {balance}</Card.Text>
						</Card.Body>
					</Card>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={props.onClose}>
						Close
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
}

export default ClientInfo;
