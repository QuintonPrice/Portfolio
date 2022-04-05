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
                        <img id="backpacking" className="rounded border shadow" alt="author" src="https://lh3.googleusercontent.com/K1NQBYGk_-PsI85mfqLUkD4EsK0UnltOTvUblE76y8I3jtqxkmjzKukRvYS-65XDsuC354oE2uo4mBWxKqAAYGQD0yy7vgUjyMfWk74iVkhMrmsX-ZeoAy_FXc0nJ9IQF2jL5NJ2M7nEKqRSuQANujcvu21RqlQggVsrCvlwFXnSBWZ2zfj8c8lOi6Pj9DnCneL8-EmpVay8JIFE25czVapgQYjspNcHo4YQvcsl-8ENqEIUV-9ZfEsjotyYkt0qWPRR7Mz7zOAT8BXuygV26gdgyToFcUWrm7gu8BTpLsSwqeHmdCFwcGRioI4Mv0G880dZvQ3giCgQJ6xPUddgvZxhb1bC5TqDIKw1L1nQxEn-Tw7sU2iagwQdbTzDsbddoBmpPvtmHrM1gR_kt_TqNP3A2j9ra577bLhXCgc-lThkQO5xweo7XojYrMl8SN3KCRQh0Fauc2Es9vnRKR7vy8lREr-nqwrjwCZlxLz9UefHoxuBaaspx8s6zj3B6A18TF5NWCkqrjBxkcuDBkRBNYXGo3IY7aIujcksG6sgEBfJP9O3r1v1CwmGZxLFdejiOArxn938-JMYrEPRWUmqbmpzZ3wlKesLv3CzwqADc4y2uWQlkrFFFMngpW0VU4q6SDRYbw-EkOm1LTBomNLaoCYs_1P9aimPSHWVO72TbnoSImDTzIGj52mGYBMHQRlJJPgK53GoCMIgnjCRx8csUd8JGWwBsTB08R7taEDIGfK-UigT617V6u9TOR-_w5aaAxAIWaquk6ZkTrKiocfOq0s5Fp4asuAgl64Fol3hBEcccc5GjMJRcgUmJaKyVdgldWr5bLxs17nqx2NMRCn_17DtCRbnYaMtELlqslC8vDTk5PxwmuHbRm2LzwfPnQr5ve2giU5BmM6suG8ubE7hQs35p3BQ9BMW9XQdRdn55Z8sut60=w1024-h1365-no?authuser=0"></img>
                    </figure>
                    <h1 id="about-hi" className="about-text font-weight-bold">Hi,</h1>
                    <br />
                    {AboutData.map((item) => {
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
                            <input autocomplete="name" type="text" name="name" class="form-control" id="nameInput" placeholder="Enter your name"></input>
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
                <a id="download-resume" href={resume} className="btn rounded border shadow" download="Quinton Price Resume"> Download My Resume </a>
            </div>
        )
    }
}

export default About;
