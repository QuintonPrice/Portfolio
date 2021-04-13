// About page

import React, { Component } from 'react';
import Navbar from '../../components/Navbar/Navbar.js'; // imports NavBar component
import Footer from '../../components/Footer/Footer.js'; // imports Footer component

import '../../App.css'; // main css file //may need to change path
import './about.css'; // about css file

import aboutpic from '../../img/about-me.jpeg';

class About extends Component {
    render() {
        return (
            <div id="about-div">
                <Navbar />
                <h1 id="header" className="font-weight-bold text-uppercase text-center ">About Me</h1>
                <div className="blog container border shadow">
                    <img id="portrait" alt="picture of author" src={aboutpic}></img>
                </div>
            </div>
        )
    }
}

export default About;