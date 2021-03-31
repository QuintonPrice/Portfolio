// About page

import React, { Component } from 'react';
import Navbar from '../../components/Navbar/Navbar.js'; // imports NavBar component
import Footer from '../../components/Footer/Footer.js'; // imports Footer component

import '../../App.css'; // main css file //may need to change path
import './about.css'; // about css file

class About extends Component {
    render() {
        return (
          <div id="about-div">
              <Navbar/>
              <h1 className="font-weight-bold text-uppercase text-center">About </h1>
          </div> 
        )
    }
}

export default About;