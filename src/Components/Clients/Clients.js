import React, { Component } from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import Table from "react-bootstrap/Table";

export class Clients extends Component {
	render() {
		// const clients = this.props.clients;
		const clients = [
			{ id: 1, firstName: "Ani", lastName: "Karapetyan", balance: 100 }
		];
		console.log(this.props);
		return (
			<>
				<h1>Users</h1>
				<Table striped bordered hover variant="dark" className="table">
					<thead>
						<tr>
							<th>ID</th>
							<th>First Name</th>
							<th>Last Name</th>
							<th>Balance</th>
						</tr>
					</thead>
					<tbody>
						{clients.map((client, index) => (
							<tr key={index}>
								<td>{client.id}</td>
								<td>{client.firstName}</td>
								<td>{client.lastName}</td>
								<td>{client.balance}</td>
							</tr>
						))}
					</tbody>
				</Table>
			</>
		);
	}
}

const mapStateToProps = state => {
	return {
		clients: state.clients
	};
};
const mapDispatchToProps = dispatch => {
	return {};
};

// export default compose(
// 	connect(mapStateToProps, mapDispatchToProps),
// 	firestoreConnect([{ collection: "clients" }])
// )(Clients);

export default compose(
	firestoreConnect([{ collection: "clients" }]),
	connect((state, props) => ({ clients: state.firestore.ordered.clients }))
)(Clients);
