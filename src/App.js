import React, { Component } from "react";
import Menu from "./Components/Menu";
import Footer from "./Components/Footer";
import SignIn from "./Components/SignIn";
import SignUp from "./Components/SignUp";
import AddUser from "./Components/AddUser";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NotFoundPage from "./Components/NotFoundPage";
import Home from "./Components/Home";
import { Provider } from "react-redux";
import  store  from "./store";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect
} from "react-router-dom";


class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<Router>
					<div className="App">
						<Menu />
						<Switch>
							<Route exact path="/home" component={Home} />
							<Route exact path="/sign-in" component={SignIn} />
							<Route exact path="/sign-up" component={SignUp} />
							<Route exact path="/add-user" component={AddUser} />
							<Route exact path="/404" component={NotFoundPage} />
							<Redirect to="/404" />
						</Switch>
						<Footer />
					</div>
				</Router>
			</Provider>
		);
	}
}

export default App;
