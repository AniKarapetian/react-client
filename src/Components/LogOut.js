import React, { Component } from 'react';
import { Link } from "react-router-dom";

export class LogOut extends Component {
    render() {
        return (
            <div className='log-out-div'>
                <h1>You logged out of your account</h1>
                <Link to={`/home`}>Home Page</Link>
            </div>
        )
    }
}

export default LogOut;
