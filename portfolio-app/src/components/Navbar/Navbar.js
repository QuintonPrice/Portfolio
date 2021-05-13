// NavBar component

import React, { Component } from 'react';
import './navbar.css';
import { Link } from 'react-router-dom'; // imports link functionality

// navigation bar class
class NavBar extends Component {
    render() {
        return (
            <nav id={this.props.navId} className={this.props.class}>
                <li id={this.props.logoId} className={this.props.logoClass}><p>{this.props.logoText}</p></li>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"><i className="fas fa-bars"></i></span>
                </button>
                <div className="collapse navbar-collapse">
                    <ul id="links" className="navbar-nav ml-auto">
                        <li className="nav-item active textlink"><Link className="nav-link" to="/home">Home</Link></li>
                        <li className="nav-item active textlink"><Link className="nav-link" to="/about">About Me</Link></li>
                        <li className="nav-item active textlink"><Link className="nav-link" to="/projects">Projects</Link></li>
                        <li className="nav-item active"><a className="nav-link" target="blank" href="https://github.com/QuintonPrice"><i className="fab fa-github"></i></a></li>
                        <li className="nav-item active"><a className="nav-link" target="blank" href="https://www.linkedin.com/in/quinton-price/"><i className="fab fa-linkedin"></i></a></li>
                    </ul>
                </div>
            </nav >
        );
    }
}

export default NavBar;