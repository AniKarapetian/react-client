import React, { Component } from "react";
import Preloader from "../Images/Preloader.gif";

class Loader extends Component {
	
	render() {
		return <div> <img className = 'loader' src = {Preloader} alt ='loader'></img> </div>;
	}
}
export default Loader;
