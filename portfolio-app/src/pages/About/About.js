// About page

import React, { Component } from 'react';
import Navbar from '../../components/Navbar/Navbar.js'; // imports NavBar component

import '../../App.css'; // main css file //may need to change path
import './about.css'; // about css file

import aboutpic from '../../img/about-me.jpeg';

class About extends Component {
    render() {
        return (
            <div id="about-div">
                <Navbar navId="navb" logoId="logo" logoText="qprice" logoClass="mr-auto" class="bg-white sticky-top navbar-fixed-top shadow ml-auto"/>
                <h1 id="header-about" className="font-weight-bold text-uppercase text-center ">About Me</h1>
                <div id="blog" className="container rounded border shadow">
                    <img id="portrait" className="rounded" alt="author" src={aboutpic}></img>
                    <h1 className="about-text font-weight-bold">Hi,</h1>
                    <p className="about-text">My name is Quinton Price. I'm currently a sophomore Computer Science student at Walla Walla University.</p>
                </div>
            </div>
        )
    }
}

export default About;