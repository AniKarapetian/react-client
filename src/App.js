import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MainContainer from "./Components/MainContainer";
import { Provider } from "react-redux";
import store from "./store/store";
import { Router, Switch, Route } from "react-router-dom";
import history from "./helpers/history";

class App extends Component {
	render() {
		return (
			<div className="App">
				<Provider store={store}>
					<Router history={history}>
						<Switch>
							<Route exact path="/" component={MainContainer} />
						</Switch>
					</Router>
				</Provider>
			</div>
		);
	}
}

export default App;
