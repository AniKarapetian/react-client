import React, { Component } from "react";
import Clients from "../clients/Clients";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { connect } from "react-redux";

export class Home extends Component {
	render() {
		console.log(this.props);
		return (
			<div>
				{this.props.isSignedIn && <Clients />}
			</div>
		);
	}
}

export default compose(
	firestoreConnect(),
	connect(
		(state) => ({
			isSignedIn: state.mainstore.isSignedIn,
		})
	)
)(Home);
