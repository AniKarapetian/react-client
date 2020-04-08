import React, { Component } from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Table } from "react-bootstrap";
import Loader from "../Loader";
import deleteIcon from "../../Images/delete_icon.png";
import editIcon from "../../Images/edit_icon.png";
import infoIcon from "../../Images/info_icon.png";
import ClientInfo from "./ClientInfo";
import DeleteClient from "./DeleteClient";
import EditClientInfo from "./EditClientInfo";

export class Clients extends Component {
	state = {};
	closeInfo = () => {
		this.setState({ client: null });
	};
	editInfo = (user) => {
		const { firestore } = this.props;
		console.log(user);
		firestore.collection("clients").doc(user.id).update(user);
		this.cancelEdit();
	};
	cancelEdit = () => {
		this.setState({ editUser: null });
	};
	cancelDelete = () => {
		this.setState({ deleteUserId: null });
	};
	deleteClient = () => {
		const { deleteUserId } = this.state;
		const { firestore } = this.props;
		firestore
			.collection("clients")
			.doc(deleteUserId)
			.delete()
			.then(function () {
				console.log("Document successfully deleted!");
			})
			.catch(function (error) {
				console.error("Error removing document: ", error);
			});
		this.cancelDelete();
	};

	handleClick = (action, data) => () => {
		switch (action) {
			case "setClientInfo":
				this.setState({ client: data });
				break;
			case "setEditUser":
				this.setState({ editUser: data });
				break;
			case "setDeleteUserId":
				this.setState({ deleteUserId: data });
				break;
			default:
				return;
		}
	};

	render() {
		const clients = this.props.clients;
		return (
			<>
				<h1>Users</h1>
				{!clients ? (
					<Loader />
				) : (
					<Table striped bordered hover variant="dark" className="table">
						<thead>
							<tr>
								<th>First Name</th>
								<th>Last Name</th>
								<th>Balance</th>
								<th></th>
							</tr>
						</thead>
						<tbody>
							{clients.map((client, index) => (
								<tr key={index}>
									<td>{client.firstName}</td>
									<td>{client.lastName}</td>
									<td>{client.balance}</td>
									<td>
										<img
											onClick={this.handleClick("setClientInfo", client)}
											className="icon"
											src={infoIcon}
											alt="info"
										/>
										<img
											onClick={this.handleClick("setEditUser", client)}
											className="icon"
											src={editIcon}
											alt="edit"
										/>
										<img
											onClick={this.handleClick("setDeleteUserId", client.id)}
											className="icon"
											src={deleteIcon}
											alt="delete"
										/>
									</td>
								</tr>
							))}
						</tbody>
					</Table>
				)}
				{!!this.state.client && (
					<ClientInfo client={this.state.client} onClose={this.closeInfo} />
				)}
				{!!this.state.deleteUserId && (
					<DeleteClient
						onClose={this.cancelDelete}
						onDelete={this.deleteClient}
					/>
				)}
				{!!this.state.editUser && (
					<EditClientInfo
						user={this.state.editUser}
						onClose={this.cancelEdit}
						onEdit={this.editInfo}
					/>
				)}
			</>
		);
	}
}

export default compose(
	firestoreConnect([{ collection: "clients" }]),
	connect((state, props) => ({ clients: state.firestore.ordered.clients }))
)(Clients);
