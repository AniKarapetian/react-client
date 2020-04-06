import React, { Component } from "react";
import Menu from "./Menu";
import Home from "./Home";
import Footer from "./Footer";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import AddUser from "./AddUser";
import NotFoundPage from "./NotFoundPage";
import { Router, Switch, Route, Redirect } from "react-router-dom";

export class MainContainer extends Component {
	render() {
		return (
			<>
				<Menu />
				<Router>
					<Switch>
						<Route exact path="/home" component={Home} />
						<Route exact path="/sign-in" component={SignIn} />
						<Route exact path="/sign-up" component={SignUp} />
						<Route exact path="/add-user" component={AddUser} />
						<Route exact path="/404" component={NotFoundPage} />
						<Redirect to="/404" />
					</Switch>
				</Router>
				<Footer />
			</>
		);
	}
}

export default MainContainer;
