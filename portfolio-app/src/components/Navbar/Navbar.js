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
                    <li className="textlink"><Link to="/home">Home</Link></li>
                    <li className="textlink"><Link to="/home">About Me</Link></li>
                    <li className="textlink"><Link to="/home">Projects</Link></li>
                    <li><Link to="//google.com"><i className="fab fa-github"></i></Link></li>
                    <li><a href="linkedin.com/in/quinton-price/"><i className="fab fa-linkedin"></i></a></li>
                </ul>
            </nav >
        );
    }
}

export default NavBar;