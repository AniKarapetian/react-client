import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Provider } from "react-redux";
import store from "./store/store";
import Footer from "./Components/Footer";
import MenuRouter from "./Components/MenuRouter";

class App extends Component {
	render() {
		return (
			<div className="App">
				<Provider store={store}>
					<MenuRouter />
				</Provider>
				<Footer />
			</div>
		);
	}
}

export default App;
