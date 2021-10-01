// Home page

import React, { Component } from 'react';
import Navbar from '../../components/Navbar/Navbar.js'; // imports NavBar component
// import Footer from '../../components/Footer/Footer.js'; // imports Footer component

import '../../App.css'; // main css file //may need to change path
import '../Home/home.css'; // home css file

class Home extends Component {
    render() {
        return (
          <div id="home-div">
              <Navbar navId="navHome" logoId="" logoText="" logoClass="" class="navhome bg-transparent navbar-fixed-top ml-auto"/>
              <h1 id="name" className="home-text font-weight-bold text-uppercase text-center">Quinton Price</h1>
              <p id="subheader" className="home-text text-center text-uppercase">Computer Science student</p>
          </div> 
        )
    }
}

export default Home;