import React, { Component } from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import Table from "react-bootstrap/Table";
import Loader from "../Loader";

export class Clients extends Component {
	render() {
		const clients = this.props.clients;
		// console.log(this.props);
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
							</tr>
						</thead>
						<tbody>
							{clients.map((client, index) => (
								<tr key={index}>
									<td>{client.firstName}</td>
									<td>{client.lastName}</td>
									<td>{client.balance}</td>
								</tr>
							))}
						</tbody>
					</Table>
				)}
			</>
		);
	}
}

export default compose(
	firestoreConnect([{ collection: "clients" }]),
	connect((state, props) => ({ clients: state.firestore.ordered.clients }))
)(Clients);
