// NavBar component

import React, { Component } from 'react';
import './navbar.css'
import { Link } from 'react-router-dom'; // imports link functionality

// navigation bar class
class NavBar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-md navbar-dark navbar-fixed-top ml-auto">
                <ul className="navbar-nav ml-auto">
                    <li className="font-weight-bold"><Link to="/home">Home</Link></li>
                    <li><Link to="/home">About Me</Link></li>
                    <li><Link to="/home">Projects</Link></li>
                    <li><Link to="/home">GitHub</Link></li>
                </ul>
            </nav >
        );
    }
}

export default NavBar;