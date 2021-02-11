// NavBar component

import React, { Component } from 'react';
import { Link } from 'react-router-dom'; // imports link functionality

// navigation bar class
class NavBar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark navbar-fixed-top">
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/trails">Bike Trails</Link></li>
                <li><Link to="/differences">Weather Differences</Link></li>
                <li><Link to="/covid">COVID Info</Link></li>
            </nav>
        );
    }
}

export default NavBar;