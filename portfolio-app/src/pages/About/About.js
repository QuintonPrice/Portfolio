// About page

import React, { Component } from 'react';
import Navbar from '../../components/Navbar/Navbar.js'; // imports NavBar component

import '../../App.css'; // main css file //may need to change path
import './about.css'; // about css file

import aboutpic from '../../img/about-me.jpeg';
import resume from '../../downloads/Resume.pdf';
import { AboutData } from './AboutData.js';

class About extends Component {
    render() {
        //var today = new Date();
        //var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

        return (
            <div id="about-div">
                <Navbar navId="navb" logoId="logo" logoText="qprice" logoClass="mr-auto" class="bg-white sticky-top navbar-fixed-top shadow ml-auto" />
                <h1 id="header-about" className="font-weight-bold text-uppercase text-center ">About Me</h1>
                <div id="blog" className="container rounded border shadow">
                    <img id="portrait" className="rounded" alt="author" src={aboutpic}></img>
                    <h1 id="about-hi" className="about-text font-weight-bold">Hi,</h1>
                    <br />
                    {AboutData.map((item, index) => {
                        return (
                            <p className="about-text" dangerouslySetInnerHTML={{ __html: item["content"] }}></p> // TODO: remove the map feature
                        )
                    })}
                </div>
                <a id="download-resume" href={resume} className="btn rounded border shadow" download="Quinton Price Resume 6-22-21"> Download My Resume </a>
            </div>
        )
    }
}

export default About;