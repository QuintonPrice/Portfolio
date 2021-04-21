// NavBar component

import React, { Component } from 'react';
import './navbar.css';
import { Link } from 'react-router-dom'; // imports link functionality

// navigation bar class
class NavBar extends Component {
    render() {
        return (
            <nav id="navb" className={this.props.class}>
                <li id={this.props.id} className={this.props.logoClass}><p>{this.props.logoText}</p></li>
                <ul className="navbar-nav ml-auto">
                    <li className="textlink"><Link to="/home">Home</Link></li>
                    <li className="textlink"><Link to="/about">About Me</Link></li>
                    <li className="textlink"><Link to="/home">Projects</Link></li>
                    <li><a target="blank" href="https://github.com/QuintonPrice"><i className="fab fa-github"></i></a></li>
                    <li><a target="blank" href="https://www.linkedin.com/in/quinton-price/"><i className="fab fa-linkedin"></i></a></li>
                </ul>
            </nav >
        );
    }
}

export default NavBar;