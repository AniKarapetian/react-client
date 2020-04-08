import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Provider } from "react-redux";
import store from "./store/store";
import { Router, Switch, Route } from "react-router-dom";
import history from "./helpers/history";

import Menu from "./Components/Menu";
import Home from "./Components/pages/Home";
import Footer from "./Components/Footer";
import SignIn from "./Components/pages/SignIn";
import SignUp from "./Components/pages/SignUp";
import AddUser from "./Components/pages/AddUser";
import NotFoundPage from "./Components/pages/NotFoundPage";
import LogOut from "./Components/pages/LogOut";

class App extends Component {
	render() {
		return (
			<div className="App">
				<Menu />
				<Provider store={store}>
					<Router history={history}>
						<Switch>
							<Route exact path="/" component={Home} />
							<Route exact path="/home" component={Home} />
							<Route exact path="/sign-in" component={SignIn} />
							<Route exact path="/sign-up" component={SignUp} />
							<Route exact path="/add-user" component={AddUser} />
							<Route exact path="/log-out" component={LogOut} />
							<Route exact path="/404" component={NotFoundPage} />
						</Switch>
					</Router>
				</Provider>
				<Footer />
			</div>
		);
	}
}

export default App;
