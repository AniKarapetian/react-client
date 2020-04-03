import React, { Component } from "react";
import Clients from "./Clients/Clients";
export class Home extends Component {
	render() {
		// console.log(this.props);
		return (
			<div>
				<Clients />
			</div>
		);
	}
}

export default Home;
