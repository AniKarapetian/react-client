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

export class Clients extends Component {
	state = {};
	closeInfo = () => {
		this.setState({ client: null });
	};
	editInfo = () => {};
	cancelDelete = () => {
		this.setState({ deleteUser: false });
	};
	deleteClient = () => {
		const { user } = this.state;
		const { firestore } = this.props;
		firestore
			.collection("clients")
			.doc(user.id)
			.delete()
			.then(function () {
				console.log("Document successfully deleted!");
			})
			.catch(function (error) {
				console.error("Error removing document: ", error);
			});
		this.cancelDelete();
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
											onClick={() => {
												this.setState({ client });
											}}
											className="icon"
											src={infoIcon}
											alt="info"
										/>
										<img
											onClick={this.editInfo}
											className="icon"
											src={editIcon}
											alt="edit"
										/>
										<img
											onClick={() => {
												this.setState({ deleteUser: true, user: client });
											}}
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
				{this.state.client && (
					<ClientInfo client={this.state.client} onClose={this.closeInfo} />
				)}
				{this.state.deleteUser && (
					<DeleteClient
						client={this.state.user}
						onClose={this.cancelDelete}
						onDelete={this.deleteClient}
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
