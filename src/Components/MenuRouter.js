import React, { Component } from "react";
import { Router, Switch, Route, Redirect } from "react-router-dom";
import history from "../helpers/history";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { connect } from "react-redux";
import Menu from "./Menu";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import AddUser from "./pages/AddUser";
import NotFoundPage from "./pages/NotFoundPage";

const PrivateRoute = ({ component: Component, isSignedIn, ...rest }) => {
	return (
		<Route
			{...rest}
			render={(props) =>
				isSignedIn ? (
					<Component {...props} />
				) : (
					<Redirect
						to={{ pathname: "/sign-in", state: { from: props.location } }}
					/>
				)
			}
		/>
	);
};

const PublicRoute = ({ component: Component, isSignedIn, ...rest }) => {
	return (
		<Route
			{...rest}
			render={(props) =>
				!isSignedIn ? (
					<Component {...props} />
				) : (
					<Redirect
						to={{
							pathname: props.location.state
								? props.location.state.from.pathname
								: "/",
							state: { from: props.location },
						}}
					/>
				)
			}
		/>
	);
};

export class MenuRouter extends Component {
	render() {
		const { isSignedIn } = this.props;
		return (
			<>
				<Router history={history}>
					<Menu />
					<Switch>
						<Route exact path="/" component={Home} />
						<PublicRoute
							exact
							path="/home"
							component={Home}
							isSignedIn={isSignedIn}
						/>
						<PublicRoute
							exact
							path="/sign-in"
							component={SignIn}
							isSignedIn={isSignedIn}
						/>
						<PublicRoute
							exact
							path="/sign-up"
							component={SignUp}
							isSignedIn={isSignedIn}
						/>
						<PrivateRoute
							exact
							path="/add-user"
							component={AddUser}
							isSignedIn={isSignedIn}
						/>
						<Route exact path="/404" component={NotFoundPage} />
						<Redirect to="/404" />
					</Switch>
				</Router>
			</>
		);
	}
}

export default compose(
	firestoreConnect(),
	connect((state) => ({
		isSignedIn: state.mainstore.isSignedIn,
	}))
)(MenuRouter);
