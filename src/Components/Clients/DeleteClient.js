import React from "react";
import { Button, Modal } from "react-bootstrap";

function DeleteClient(props) {
	return (
		<>
			<Modal show={true} onHide={props.onClose} animation={false}>
				<Modal.Body>Do you want to delete the user?</Modal.Body>
				<Modal.Footer>
					<Button variant="danger" onClick={props.onDelete}>
						Delete
					</Button>
					<Button variant="secondary" onClick={props.onClose}>
						Cancel
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
}

export default DeleteClient;
