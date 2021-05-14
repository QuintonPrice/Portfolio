// NavBar component

import React, { Component } from 'react';
import './navbar.css';
import { default as NavbarBS } from 'react-bootstrap/Navbar';
import { default as NavBS } from 'react-bootstrap/Nav';

import { Link } from 'react-router-dom'; // imports link functionality

// navigation bar class
class NavBar extends Component {
    render() {
        return (
            <NavbarBS id={this.props.navId} className={this.props.class} expand="lg" >
                <li id={this.props.logoId} className={this.props.logoClass}><p>{this.props.logoText}</p></li>
                <NavbarBS.Toggle aria-controls="navbarToggler">
                </NavbarBS.Toggle>
                <NavbarBS.Collapse variant="dark" bg="dark" id="navbarToggler">
                    <NavBS id="links" className="ml-auto">
                        <li className="textlink"><Link className="nav-link" to="/home">Home</Link></li>
                        <li className="textlink"><Link className="nav-link" to="/about">About Me</Link></li>
                        <li className="textlink"><Link className="nav-link" to="/projects">Projects</Link></li>
                        <li><a className="nav-link" target="blank" href="https://github.com/QuintonPrice"><i className="fab fa-github"></i></a></li>
                        <li><a className="nav-link" target="blank" href="https://www.linkedin.com/in/quinton-price/"><i className="fab fa-linkedin"></i></a></li>
                    </NavBS>
                </NavbarBS.Collapse>
            </NavbarBS >
        );
    }
}

//TODO: add a way to load javascript scripts

export default NavBar;