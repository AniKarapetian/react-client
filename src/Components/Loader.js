import React, { Component } from "react";
import Preloader from "../Images/Preloader.gif";

class Loader extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loading: true
		};
	}
	render() {
		return <div> <img src = {Preloader} alt ='loader'></img> </div>;
	}
}
export default Loader;
