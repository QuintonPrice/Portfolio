// About page

import React, { Component } from 'react';
import Navbar from '../../components/Navbar/Navbar.js'; // imports NavBar component

import '../../App.css'; // main css file //may need to change path
import './about.css'; // about css file

// import aboutpic from '../../img/about-me.jpeg';
import backpacking from '../../img/backpacking.png';
import resume from '../../downloads/Resume.pdf';
import { AboutData } from './AboutData.js';

class About extends Component {

    submitAlert = () => {
        alert("Form submitted!");
    }

    render() {
        //var today = new Date();
        //var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        // 
        return (
            <div className="about-div">
                <Navbar navId="navb" logoId="logo" logoText="qprice" logoClass="mr-auto" class="bg-white sticky-top navbar-fixed-top shadow ml-auto" />
                <h1 id="header-about" className="font-weight-bold text-uppercase text-center ">About Me</h1>
                <div id="blog" className="container rounded border shadow">
                    <figure>
                        <img id="backpacking" className="rounded border shadow" alt="author" src={backpacking}></img>
                        <figcaption className="font-italic">Backpacking in the Goat Rocks Wilderness</figcaption>
                    </figure>
                    <h1 id="about-hi" className="about-text font-weight-bold">Hi,</h1>
                    <br />
                    {AboutData.map((item, index) => {
                        return (
                            <p className="about-text" dangerouslySetInnerHTML={{ __html: item["content"] }}></p> // TODO: remove the map feature
                        )
                    })}
                </div>

                <div id="contact" className="container rounded border shadow">
                    <h2>Contact me!</h2>
                    <form name="contact-form" method="POST" data-netlify="true">
                        <input type="hidden" name="form-name" value="contact-form" />
                        <div className="form-group font-weight-bold">
                            <label for="nameInput">Name</label>
                            <input type="text" name="name" class="form-control" id="nameInput" placeholder="Enter your name"></input>
                        </div>
                        <div className="form-group font-weight-bold">
                            <label for="emailInput">Email Address</label>
                            <input type="email" name="email" className="form-control" id="emailInput" placeholder="Enter email address"></input>
                        </div>
                        <div className="form-group font-weight-bold">
                            <label for="textInput">Message</label>
                            <textarea name="message" className="form-control" id="textInput" rows="4" placeholder="Enter your message"></textarea>
                        </div>
                        <button id="submit-button" type="submit" onClick={this.submitAlert} className="btn btn-primary">Submit</button>
                    </form>
                </div>
                <a id="download-resume" href={resume} className="btn rounded border shadow" download="Quinton Price Resume 6-22-21"> Download My Resume </a>
            </div>
        )
    }
}

export default About;