import React, { Component } from "react";
import { Link } from "react-router-dom";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { connect } from "react-redux";
export class LogOut extends Component {
	render() {
		this.props.dispatchSignin("SIGNOUT_SUCCESS");
		return (
			<div className="log-out-div">
				<h1>You logged out of your account</h1>
				<Link className="link" to={`/home`}>
					Home Page
				</Link>
			</div>
		);
	}
}

export default compose(
	firestoreConnect(),
	connect(
		(state) => ({
			isSignedIn: state.mainstore.isSignedIn,
		}),
		{
			dispatchSignin: (type, data) => (dispatch) => {
				dispatch({ type, data });
			},
		}
	)
)(LogOut);
