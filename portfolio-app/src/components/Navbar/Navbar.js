// NavBar component

import React, { Component } from 'react';
import './navbar.css'
import { Link } from 'react-router-dom'; // imports link functionality

// navigation bar class
class NavBar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark navbar-fixed-top">
                <li><Link to="/home">Home</Link></li>
                <li>Bike Trails</li>
                <li>Weather Differences</li>
                <li>COVID Info</li>
            </nav>
        );
    }
}

export default NavBar;