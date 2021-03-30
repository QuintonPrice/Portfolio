// About page

import React, { Component } from 'react';
import Navbar from '../../components/Navbar/Navbar.js'; // imports NavBar component
import Footer from '../../components/Footer/Footer.js'; // imports Footer component

import '../../App.css'; // main css file //may need to change path
import './about-me.css'; // home css file

class About extends Component {
    render() {
        return (
          <div id="home-div">
              <Navbar/>
              <h1 id="name" className="font-weight-bold text-uppercase text-center">Quinton Price</h1>
              <p id="subheader" className="text-center text-uppercase">Computer Science student</p>
          </div> 
        )
    }
}

export default About;