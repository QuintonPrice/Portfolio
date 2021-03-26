// Home page

import React, { Component } from 'react';
import { Link } from 'react-router-dom'; // imports link functionality
import Navbar from '../../components/Navbar/Navbar.js'; // imports NavBar component

import '../../App.css'; // main css file //may need to change path
import '../Home/home.css'; // fix this later!!!!!

class Home extends Component {
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

export default Home;