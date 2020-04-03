import React, { Component } from "react";
import pageNotFound from "../Images/pageNotFound.jpg";

class NotFoundPage extends Component {
	render() {
		return (
			<div>
				<h1>Page not found</h1>
				<img src={pageNotFound} alt="pageNotFound"></img>
			</div>
		);
	}
}

export default NotFoundPage;
