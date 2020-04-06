import React, { Component } from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Table } from "react-bootstrap";
import Loader from "../Loader";
import deleteIcon from "../../Images/delete_icon.png";
import editIcon from "../../Images/edit_icon.png";
import infoIcon from "../../Images/info_icon.png";

export class Clients extends Component {
	getInfo = ()=>{

	}
	editInfo = () =>{

	}
	deleteClient = ()=>{
		
	}
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
										<img onClick = {this.getInfo} className="icon" src={infoIcon} alt="info" />
										<img onClick = {this.editInfo} className="icon" src={editIcon} alt="edit" />
										<img onClick = {this.deleteClient} className="icon" src={deleteIcon} alt="delete" />
									</td>
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
